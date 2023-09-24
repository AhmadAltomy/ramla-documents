# Architecture

JELL Architecture documentation, architecture diagrams and code structure.

## Folder structure

```
jell
├── api
├── cmd
│   ├── jell
├── client
├── config
├── deployments
├── docs
├── models
├── internal
│   ├── repositories
│   ├── services
│   ├── usecases
├── pkg
├── scripts
├── .air.conf
├── .dockerignore
├── .gitignore
├── go.mod
├── go.sum
├── LICENSE
├── Makefile
└── README.md
```

### api

The `api` folder contains the `http` files for the API. This is where the API routes are defined.

#### Guidelines

- The `api` folder should only contain `http` files.
- Each `route group` should have its own file.
- Without any subfolders, the `api` folder should only contain `http` files.
- Each `http` file should only contain `http` code.
- Routes should be grouped by their `route group` and should be in alphabetical order.

#### Example

```
api
├── auth__http.go
├── dashboard__http.go
├── health__http.go
├── post__http.go
└── user__http.go
```

#### Naming

The `api` folder should contain `http` files. The naming convention for these files is `routeGroup__http.go`.

#### HTTP file structure

The `http` files should contain the following structure:

```go
package api

import (
    "net/http"

    "github.com/gin-gonic/gin"
)

type routeGroup struct {
    router *gin.RouterGroup
}

func newRouteGroup(router *gin.RouterGroup) *routeGroup {
    return &routeGroup{
        router: router.Group("/group"),
    }
}

func (rg *routeGroup) registerRoutes() {
    rg.router.GET("/", rg.get)
}

func (rg *routeGroup) get(c *gin.Context) {
    c.JSON(http.StatusOK, gin.H{
        "message": "Hello World!",
    })
}
```

#### How to add a new route group to the API

1. Create a new `http` file in the `api` folder.
2. Create a new `routeGroup` struct, name the group as the file name.
3. Create a new `newRouteGroup` function, name the function as the file name.
4. Create a new `registerRoutes` function.
5. Create a new `function` for each route.
6. Add the new `routeGroup` to the `registerRoutes` function in the `api.go` file.

Example:

```go
// api.go

package api

import (
    "github.com/gin-gonic/gin"
)

type API struct {
	Engine *gin.Engine
}

func NewAPI(engine *gin.Engine) *API {
	return &API{
		Engine: engine,
	}
}

func (a *API) RegisterRoutes() {
	apiGroup := a.Engine.Group("/api")
	{
		newAuthHTTP(apiGroup).registerRoutes()
	}
}
```

### cmd

The `cmd` folder contains the `main` file for the application.

#### Guidelines

- The `cmd` folder can contain multiple folders for different applications.
- Each application folder should contain a `main` file.
- The `main` file should only contain the `main` function.
- The folder can contain other files if needed, or subfolders.

#### Example

```
cmd
├── jell
│   ├── main.go
│   ├── Dockerfile
│   └── Dockerfile.dev
└── jell-worker
    ├── main.go
    ├── Dockerfile
    └── Dockerfile.dev
```

### client

The client can contain the frontend code for the application, using Monorepo with clients folder.

#### Guidelines

- The `client` folder can contain multiple folders for different clients.
- Client can be a web application, mobile application, desktop application, etc.
- Monorepo for all clients.
- Monorepo can must contain libraries, components, etc.

### config

The `config` folder contains the configuration files for the application.

#### Guidelines

- The `config` folder should only contain configuration files.
- The `config` folder should not contain any code.
- The `config` folder should not contain any secrets.
- The `config` folder should not contain any sensitive information.

#### Example

```
config
├── config.go
└── config.json
```

### deployments

The `deployments` folder contains the deployment files for the application.

#### Example

```
deployments
├── docker-compose.yml
├── Dockerfile
├── Dockerfile.dev
├── Dockerfile.prod
├── Dockerfile.test
├── Makefile
└── README.md
```

### docs

The `docs` folder contains the documentation for the application.

#### Example

```
docs
├── docs.go
├── swagger.json
└── swagger.yaml
```

### models

The `models` folder contains the model files for the application.

#### Guidelines

- The `models` folder should only contain models files.
- The `models` folder can contain files only for the database models.
- The `models` folder can contain files only for the request/response models.

#### Example

```
models
├── user__model.go
└── user__request.go
```

### internal

The `internal` folder contains the internal files for the application.

#### Example

```
internal
├── repositories
│   └── user__repository.go
├── services
│   └── user__service.go
└── usecases
    └── user__usecase.go
```

### pkg

The `pkg` folder contains the packages files for the application.

#### Example

```
pkg
├── auth
│   ├── auth.go
│   ├── auth_test.go
│   ├── jwt.go
│   └── jwt_test.go
├── config
│   ├── config.go
│   └── config_test.go
├── database
│   ├── database.go
│   └── database_test.go
├── logger
│   ├── logger.go
│   └── logger_test.go
├── middleware
│   ├── auth__middleware.go
│   ├── auth__middleware_test.go
│   ├── cors__middleware.go
│   └── cors__middleware_test.go
├── repositories
│   ├── user__repository.go
│   └── user__repository_test.go
├── services
│   ├── user__service.go
│   └── user__service_test.go
├── usecases
│   ├── user__usecase.go
│   └── user__usecase_test.go
├── utils
│   ├── utils.go
│   └── utils_test.go
├── validator
│   ├── validator.go
│   └── validator_test.go
├── .gitignore
├── go.mod
├── go.sum
└── README.md
```

#### database

The `database` folder contains the database files for the application.

##### Guidelines

- The `database` folder should only contain database files.
- Connection to the database should be done in the `database.go` file.
- The `database.go` file should contain `newDatabase` function.

##### Database file structure

The `database` files should contain the following structure:

```go
package database

import (
    "fmt"

    "gorm.io/driver/postgres"
    "gorm.io/gorm"
)

func NewDatabase() *gorm.DB {
    dsn := "host=localhost user=postgres password=postgres dbname=postgres port=5432 sslmode=disable TimeZone=Asia/Jakarta"
    db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
    if err != nil {
        panic(fmt.Errorf("failed to connect database: %w", err))
    }
    
    return db
}
```

### scripts

The `scripts` folder contains the script files for the application.

#### Example

```
scripts
├── db
│   ├── migrate.sh
│   └── rollback.sh
├── docker
│   ├── build.sh
│   ├── build-dev.sh
│   ├── build-prod.sh
│   ├── build-test.sh
│   ├── run.sh
│   ├── run-dev.sh
│   ├── run-prod.sh
│   ├── run-test.sh
│   ├── stop.sh
│   ├── stop-dev.sh
│   ├── stop-prod.sh
│   └── stop-test.sh
```

### .air.conf

The `.air.conf` file contains the configuration for the [Air](https://github.com/cosmtrek/air) package.

### .dockerignore

The `.dockerignore` file contains the files that should be ignored when building the Docker image.

### .gitignore

The `.gitignore` file contains the files that should be ignored by Git.

### go.mod

The `go.mod` file contains the Go modules for the application.

### go.sum

The `go.sum` file contains the Go modules checksums for the application.

### LICENSE

The `LICENSE` file contains the license for the application.

### Makefile

The `Makefile` file contains the Makefile for the application.

### README.md

The `README.md` file contains the README for the application.

