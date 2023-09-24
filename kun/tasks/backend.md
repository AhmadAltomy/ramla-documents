# Backend Tasks

Tasks related to the backend, including the backend's API, state, and navigation.

---

## Create products (Model, API, DB) in the backend

- **Description**: You need to create the products model, API, and DB in the backend.
- **Tags**: Backend, Products
- **Due Date**:
- **Assigned**: Marah Musleh

### Summary

We need to create products APIs in the backend, and make sure that the APIs are working correctly.
The APIs should be able to create, read, update, and delete products.
We also need to create the products model and DB in the backend.

### Expected Outcome

- Products APIs
- Products Model
- Products DB
- Products CRUD
- Product List With Query Params (Pagination, Search, Sort, Filter, etc.)
- Product Swagger Docs in top of each API function

### Tasks

- [ ] Create Products Model Structure.
- [ ] Connect Products Model to the DB, Auto Migrates.
- [ ] Create Products Router Group, And Add CRUD Functions. (Create, Read, Update, Delete)
- [ ] Create Products Swagger Docs, And Add It To Each API Function.
- [ ] Use (queries.GetQuery(), queries.QueryScope(), payload.GetServerResponseSuccess(),
  payload.GetServerResponseError(), Count Scope) In Each API Function.
- [ ] Be sure the APIs include in list products with query params (pagination, search, sort, filter, etc.).
- [ ] Test The APIs Using Postman Or Swagger UI.

### Help

- Find an example for CRUD APIs in `/App/models/device` || `/App/models/category`
- Find an example for queries params
  in `/App/models/device/device_orm.go` || `/App/models/category/category_orm.go`
- Learn how to run the backend in `sdk/README.md` You can run it locally or using docker.

### Architecture & Design

#### Files structure

- `/App/models/product/products_init.go` - Products Model Init Function.
- `/App/models/product/products_struct.go` - Products Model Struct.
- `/App/models/product/products_orm.go` - Products Model ORM.
- `/App/models/product/products_routes.go` - Products Model APIs Router Group.

#### Product Model

```go title="products_struct.go"
package product

import (
    "time"

    "gorm.io/gorm"
)

type DisccountType int

const (
    DisccountTypeNull DisccountType = iota
    DisccountTypePercentage
    DisccountTypeFixed
)


type Product struct {
    ID        uint           `gorm:"primaryKey" json:"ID"`
    Name      string         `gorm:"not null" json:"name"`
    Description string       `json:"description"`
    Price     float64        `gorm:"not null" json:"price"`
    Credits   int            `gorm:"not null" json:"credits"`
    Disccount float64        `json:"disccount"`
    DisccountType DisccountType `gorm:"default:0" json:"disccount_type"`
    DisccountStartAt time.Time `gorm:"not null" json:"disccount_start_at"`
    DisccountEndAt time.Time   `gorm:"not null" json:"disccount_end_at"`
    CreatedAt time.Time      `json:"created_at"`
    UpdatedAt time.Time      `json:"updated_at"`
} 
```

### Additional Information

- [GORM](https://gorm.io/)
- [Gin](https://gin-gonic.com/)
- [Golang Gin Swagger](https://github.com/swaggo/gin-swagger)

### Guidelines

- Use Golang, GORM, Gin, And Swagger.
- Use the same structure as the other models.
- Use the same structure as the other APIs.
- Add query params to the list products API.
- Add init function to the model to auto migrate the model to the DB.
- Add init function to the models.go
- Init model must have Auto Migrate, APIs router group.

---

## Create `WithoutMyPosts` Scope in the Posts Model

- **Description**: You need to create `WithoutMyPosts` scope in the posts model.
- **Tags**: Backend, Posts, Scope
- **Due Date**:
- **Assigned**: Marah Musleh

### Summary

In the post model, it's not having a scope to get all posts without the user's posts.
We need to create a scope to get all posts without the user's posts.

### Expected Outcome

- `WithoutMyPosts` Scope in the Posts Model.
- `WithoutMyPosts` Scope must exclude the user's posts.
- `WithoutMyPosts` Scope must be in `PostQuery` struct.

### Tasks

- [ ] Create `WithoutMyPosts` Scope in the Posts Model.
- [ ] `WithoutMyPosts` Add DB Scope if `Query params has WithoutMyPosts = true`.
- [ ] The DB Scope must have `Not In` condition to exclude the user's posts.
- [ ] Check the other scopes in the posts model to know how to create the scope.
- [ ] Test The Scope Using Postman Or Swagger UI.

### Help

- Find an example for scopes in `/App/models/posts/scopes.go`
- Find an example for queries params in `/App/models/posts/query.go`
- Check the controller APIs to know how to get the `UserID` from the context.

--- 

## Edit `GetPosts` API in the Posts Controller

- **Description**: You need to edit `GetPosts` API in the posts controller.
- **Tags**: Backend, Posts, Controller
- **Due Date**:
- **Assigned**: Ahmad Altomy

### Summary

We must fix the Get Posts API to be faster and more efficient.

### Expected Outcome

- Add `WithPostCard` Scope to the `GetPosts` API.
    - That will process the post to be ready to `PostCard` component.
    - The important scope is:
        - `IsBookmarked`.
        - `IsUserFollowed`.
    - Remove the `Uneseccary` scopes.
- Remove the `-` from `PostStruct` struct.
- Add `Select` to the `GetPosts` API, To select only the needed columns.

### Tasks

- [ ] Add `WithPostCard` Scope to the `GetPosts` API.
- [ ] Remove the `-` from `PostStruct` struct.
- [ ] Add `Select` to the `GetPosts` API, To select only the needed columns.
- [ ] Test The API Using Postman Or Swagger UI.
