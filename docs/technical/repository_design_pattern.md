# Repository Design Pattern (Golang)

## Introduction

The repository design pattern is a common pattern used in software development. It is used to separate the business
logic and the data access logic.

## Implementation

### Repository Interface

- Repository interface is used to define the data access methods for a specific data model.
- Model Definition: The data model is defined as a struct.
- Repository Definition: The repository is defined as an interface.
- Repository Implementation: The repository implementation is used to implement the data access methods for a specific
  data model.
- Repository Factory: The repository factory is used to create a repository implementation.

```go
type Repository interface {
    Create(ctx context.Context, model *Model) error
    Update(ctx context.Context, model *Model) error
    Delete(ctx context.Context, id string) error
    Find(ctx context.Context, id string) (*Model, error)
    FindAll(ctx context.Context) ([]*Model, error)
}
```

### Repository Implementation

The repository implementation is used to implement the data access methods for a specific data model. The repository
implementation is used to create a collection of data access methods for a specific data model.

```go
type Repository struct {
    db *sql.DB
}

func NewRepository(db *sql.DB) *Repository {
    return &Repository{
        db: db,
    }
}

func (r *Repository) Create(ctx context.Context, model *Model) error {

}

func (r *Repository) Update(ctx context.Context, model *Model) error {

}

func (r *Repository) Delete(ctx context.Context, id string) error {

}

func (r *Repository) Find(ctx context.Context, id string) (*Model, error) {

}

func (r *Repository) FindAll(ctx context.Context) ([]*Model, error) {

}
```

