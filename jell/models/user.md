# User Models

All user models.

## User

The user model is used to store information about a user. It is used for authentication and authorization.

### Fields

- ID - The unique ID of the user.
- Username - The username of the user.
- Password - The password of the user.
- Email - The email of the user.
- Status - The status of the user.
- Group - The group of the user.
- Profile - The profile of the user.
- SocialLogins - The social logins of the user.
- Addresses - The addresses of the user.
- Roles - The roles of the user.
- CreatedAt - The time the user was created.
- UpdatedAt - The time the user was updated.

### Gorm Schema

```go
package models

import (
    "time"
)

type User struct {
    ID uint          `json:"ID" gorm:"primary_key"`
    Username string        `json:"username" gorm:"unique;not null"`
    Password string        `json:"password" gorm:"not null"`
    Email string        `json:"email" gorm:"unique;not null"`
    Status UserStatus    `json:"status" gorm:"default:'email_unverified'"`
    Group UserGroup     `json:"group" gorm:"default:'client'"`
    Profile Profile       `json:"profile"`
    SocialLogins []SocialLogin `json:"social_logins"`
    Addresses    []Address     `json:"addresses"`
    Roles        []Role        `json:"roles" gorm:"many2many:user_roles;"`
    CreatedAt time.Time     `json:"CreatedAt"`
    UpdatedAt time.Time     `json:"UpdatedAt"`
}
```

## UserStatus

The user status is used to determine the status of a user.

### Fields

- Active - The user is active.
- Inactive - The user is inactive.
- EmailUnverified - The user has not verified their email.
- PhoneUnverified - The user has not verified their phone.
- Blocked - The user is blocked.

### Gorm Schema

```go
package models

type UserStatus string

const (
	Active          UserStatus = "active"
	Inactive        UserStatus = "inactive"
	EmailUnverified UserStatus = "email_unverified"
	PhoneUnverified UserStatus = "phone_unverified"
	Blocked         UserStatus = "blocked"
)
```

## UserGroup

The user group is used to determine the group of a user.

### Fields

- Client - The user is a client.
- Admin - The user is an admin.
- SuperAdmin - The user is a super admin.
- Partner - The user is a partner.
- Staff - The user is a staff.

### Gorm Schema

```go
package models

type UserGroup string

const (
	Admin      UserGroup = "admin"
	SuperAdmin UserGroup = "super_admin"
	Staff      UserGroup = "staff"
	Client     UserGroup = "client"
	Partner    UserGroup = "partner"
)
```

## Profile

The profile is used to store information about a user.

### Fields

- ID - The unique ID of the profile.
- FirstName - The first name of the user.
- LastName - The last name of the user.
- Country - The country of the user.
- Phone - The phone of the user.
- Gender - The gender of the user.
- Birthday - The birthday of the user.
- Bio - The bio of the user.
- Avatar - The avatar of the user.
- Language - The language of the user.
- Currency - The currency of the user.
- Timezone - The timezone of the user.
- CreatedAt - The time the profile was created.
- UpdatedAt - The time the profile was updated.

### Gorm Schema

```go
package models

import "time"

type Profile struct {
	ID        uint      `json:"ID" gorm:"primary_key"`
	FirstName string    `json:"first_name"`
	LastName  string    `json:"last_name"`
	Country   string    `json:"country"`
	Phone     string    `json:"phone"`
	Gender    int       `json:"gender" gorm:"default:0"`
	Birthday  time.Time `json:"birthday"`
	Bio       string    `json:"bio"`
	Avatar    string    `json:"avatar"`
	Language  string    `json:"language"`
	Timezone  string    `json:"timezone"`
	Currency  string    `json:"currency"`
	UserID    uint      `json:"user_id"`
	CreatedAt time.Time `json:"CreatedAt"`
	UpdatedAt time.Time `json:"UpdatedAt"`
}
```

## SocialLogin

The social login is used to store information about a user's social login.

### Fields

- ID - The unique ID of the social login.
- Provider - The provider of the social login.
- ProviderID - The provider ID of the social login.
- ProviderToken - The provider token of the social login.


### Gorm Schema

```go
package models

type SocialLogin struct {
	ID            uint                `json:"ID" gorm:"primary_key"`
	Provider      SocialLoginProvider `json:"provider" gorm:"not null"`
	ProviderID    string              `json:"provider_id"`
	ProviderToken string              `json:"provider_token" gorm:"not null"`
	UserID        uint                `json:"user_id"`
}
```

## SocialLoginProvider

The social login provider is used to determine the provider of a social login.

### Fields

- Facebook - The social login is a Facebook login.
- Google - The social login is a Google login.
- Apple - The social login is an Apple login.


### Gorm Schema

```go
package models

type SocialLoginProvider string

const (
    Facebook SocialLoginProvider = "facebook"
    Google   SocialLoginProvider = "google"
    Apple    SocialLoginProvider = "apple"
)
```

## Address

The address is used to store information about a user's address.

### Fields

- ID - The unique ID of the address.
- Desc - The description of the address.
- Country - The country of the address.
- State - The state of the address.
- City - The city of the address.
- Street - The street of the address.
- Zip - The zip of the address.


### Gorm Schema

```go
package models

import "time"

type Address struct {
	ID        uint      `json:"ID" gorm:"primary_key"`
	Desc      string    `json:"desc"`
	Country   string    `json:"country"`
	Street    string    `json:"street"`
	City      string    `json:"city"`
	State     string    `json:"state"`
	Zip       string    `json:"zip"`
	UserID    uint      `json:"user_id"`
	CreatedAt time.Time `json:"CreatedAt"`
	UpdatedAt time.Time `json:"UpdatedAt"`
}
```


## Role

The role is used to store information about a user's role.

### Fields

- ID - The unique ID of the role.
- Name - The name of the role.
- Desc - The description of the role.
- Permissions - The permissions of the role.
- CreatedAt - The time the role was created.
- UpdatedAt - The time the role was updated.
- Users - The users of the role.


### Gorm Schema

```go
package models

import "time"

type Role struct {
	ID          uint         `json:"ID" gorm:"primary_key"`
	Name        string       `json:"name" gorm:"unique;not null"`
	Desc        string       `json:"desc" gorm:"not null"`
	Users       []User       `json:"users" gorm:"many2many:user_roles;"`
	Permissions []Permission `json:"permissions" gorm:"many2many:role_permissions;"`
	CreatedAt   time.Time    `json:"CreatedAt"`
}
```

## Permission

The permission is used to store information about a user's permission.

### Fields

- ID - The unique ID of the permission.
- Name - The name of the permission.
- Desc - The description of the permission.
- Roles - The roles of the permission.
- CreatedAt - The time the permission was created.
- UpdatedAt - The time the permission was updated.
- Users - The users of the permission.


### Gorm Schema

```go
package models

type Permission struct {
	ID    uint   `json:"ID" gorm:"primary_key"`
	Name  string `json:"name" gorm:"unique;not null"`
	Desc  string `json:"desc" gorm:"not null"`
	Roles []Role `json:"roles" gorm:"many2many:role_permissions;"`
}
```