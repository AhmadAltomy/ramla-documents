# Meetings

Meeting notes for the team.


## 23 Sep 2023–11:00 PM

### About the request management system

- How can we connect the Lovs with the request management system? 
- What is the relation between the Lovs and the request management system?
- What is the fields of the Lovs?
- What is the fields of the request management system?

### About the Lovs

- What is the fields of the Lovs?
- What is the fields of the Lovs items?
- What is the relation between the Lovs and the Lovs items?


### About Kun and Jell 

- The project has been updated.
- New fixes added new features added.
- System event added and working correctly.
- The system event is a system that can handle the events in the system.


### Formance discussion

- Formance ledgers system.
- How formance can handle the ledgers.
- How formance can handle transactions in the ledgers system.
- Ledger is a book or other collection of financial accounts of a particular type.
- Record (a financial transaction) in a ledger or account.
- You can add a new ledger.
- You can add a new transaction.
- You can add a new transaction to the ledger.

#### The Formance Wallet System

- Wallet is for the user.
- Wallet is for the company.
- Can be handled by the user.
- The user can add money to the wallet.
- The user can remove money from the wallet.

#### The Formance Credit System

- Credit is for the user.
- Credit is for the company.
- Can be handled by the user.
- The user can add credit to the credit.
- The user can remove credit from the credit.
- The user can transfer credit to another user.
- The user can transfer credit to another credit.


#### Transfer credit to the wallet

- The user can transfer credit to the wallet.
- User can be able to buy credit from the application using.

## 11 Sep 2023–11:00 PM

### Requirements 

- Stories for the next sprint.
- How team can handle the stories.
- Updating the board
- Build the app.

## 10 Sep 2023–12:00 PM

### Todo

- Paid in the post-Card
- Paid in the post-View
- Star in the profile page

## 09 Sep 2023

## Update about the sprint progress

- Finish almost all the sprint tasks.
- Fixing bugs in the app.
- Fixing the editing post.
- Adding the payment system.

## Testing process

- Working closely with the QA team.
- Let the QA team test the stories after development.
- Let the QA team test the stories after the sprint.
- Testing the stories by the developers.
- Building the app and testing it by the developers.

## Ideas 

- Gift system.
- Payment system.
- Live-streaming system.
- Online courses system.
- Product system.
- Ads system.
- Wallet system.
- Credit system.


## 02 Sep 2023–07:00 PM

### Attendees

- Ahmad
- Marah Musleh
- Marah Alrefai
- Laith
- Lujain Alatar

### Agenda

## 02 Sep 2023

### Attendees

- Ali Bashiti
- Ahmad
- Sami Saad
- Marah Musleh
- Marah Alrefai
- Laith
- Lujain Alatar

### Agenda

- Discuss the sprint progress
- Update about the sprint progress
- Discuss Request management system
- Discuss List of Values (LOVs) system

### Sprint progress

- Ahmad
    - [x] Fixing the `Edit Post` to handle edit `Video`, `Audio`, correctly.
    - [x] Fixing the `Post Content` Bug in the `Edit Post` screen.
    - [x] Fixing pressing on `HeroSection` for `Audio`, `Video` post.
    - [x] Fixing video player controller / play in mount.
    - [x] Fixing empty image space in `PostView`.
    - [x] Fixing the `PostCard` press handler to detect the press on the all space in post-card.
    - [x] Fixing the Design of Following/Followers screen.
    - [x] Fixing the `Profile` counter to show the correct number of posts.
    - [x] Remove the ability to chat with myself.
    - [x] Fixing `YouTube` Url to be valid, And able to play in the app, And fix the ability to remove Trailer.
    - [x] Fixing the `PostCard` action sheet items.
    - [x] Add the functionality to show the cover image of the post as a background in the audio player.
    - [x] Added Multi Profile for video player `360p`, `480p`, `720p`.
- Marah Alrefai
    - [x] Handle `Reflection` for Bookmark and Follow.
    - [x] Adding the `Wallet`, `Credit` UI in the app.
- Marah Musleh
    - [x] Creating the `Product` model, API, DB in the backend.

### Request management system

Request management system is a system that can handle the requests from the users to the admins and the admins can
handle the requests from the users.


#### CV


#### Request

- Request ID
- Request name
- Request description
- Request type
- Request status
- Request date
- Request file
- Request requester
- Request requested by
- Request requested to
- Request requested for
- Request requested from
- Request requested at

### List of Values (LOVs) system

List of Values (LOVs) system is a system that can handle the list of values and the values of the list of values.

#### List of Values (LOV)

- List of values
- Includes a list of items
- When you create a new LOV List, you can add a new LOV Item
- When you open a LOV List, you can see the details of the LOV List

##### Structure

- ID (UUID)
- Name (String)
- Description (String)
- Type (String)
- Status (String)
- Items (Array of LOV Item)
- CreatedAt (Date)
- UpdatedAt (Date)

#### LOV Item

- Has an item code, item name, item description, item type, item status
- Can be a child of another LOV Item
- Can be a parent of another LOV Item
- When you create a new LOV Item, you can add a new LOV Item
- When you open a LOV Item, you can see the details of the LOV Item

##### Structure

- ID (UUID)
- Code (String)
- Name (String)
- Description (String)
- Type (String)
- Status (String)
- ParentID (UUID)
- Children (Array of LOV Item)
- CreatedAt (Date)
- UpdatedAt (Date)
- Attributes (Array of Attribute)
- LOVListID (UUID)
- LOVList (LOV List)

#### List of Attribute to LOV Item

- Has an attribute type, attribute value
- Can be static
- Can be dynamic
- Can be lov item

##### Structure

- ID (UUID)
- Type (String)
- Value (String)
- LOVItemID (UUID)
- LOVItem (LOV Item)
