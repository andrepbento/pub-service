# Pub Service Project Documentation ☕️

_"Sit, request, consume, leave"_

## About

The main propose of this _Markdown_ file is to expose the ideas, features and functionalities for the back-end and front-end layers of this project.

For more info about the entire project stuctures, please check the [Pub_Service_Diagrams.mdj](/docs/Pub_Service_Diagrams.mdj) using the [StarUML](http://staruml.io/) program.

## Back-end

The service is composed with a back-end server layer that can handle all the requests and treat all the service information. 

## Front-end

The service is also composed with a front-end layer that expose the information to the users so that they can use and enjoy the developed service. <!-- For more info about the project, read the [Front-end.md](/docs/Front-end.md) file..-->

## Entities

| Name       | Description                                                              | Example                                 |
| :--------- | :----------------------------------------------------------------------: | :-------------------------------------: |
| Category   | A certain type of items related to each other by some common aspect.     | Drinks                                  |
| Item       | The product itself.                                                      | Super Bock 0.20L                        |
| Order      | The collection of items choosen by the client to be prepared.            | Order n.1 for Table n.7 with Items<...> |
| Pub        | The company itself.                                                      | BeerForSale                             |
| StarRating | An integer number that represents the rating given by a user to an item. | 5 Stars                                 |
| User       | The user itself as an Admin or Client.                                   | "André Bento"                           |

_Entities dyagram data model will be avaiable soon in the [db](/db) folder._

## Features

### Authentication

The authentication process is handled by [Passport](http://www.passportjs.org/docs/) and [JWT](https://jwt.io/introduction/).

- [ ] 1.  The user must be able to the perform an authentication using his own local service credentials.
- [ ] 2.  The user must be able to the perform an authentication using his own Facebook credentials.
- [ ] 3.  The user must be able to the perform an authentication using his own Google credentials.

### Data

All the data related to the server is stored on a MongoDB database.

- [ ] 1.  Handle all the data related to the Pubs.
  - [ ] 1.1. The user, authenticated as an admin, must be able to register a new Pub.
  - [ ] 1.2. The user, authenticated as an admin, must be able to change the information of one of his own Pubs.
  - [ ] 1.3. The user, authenticated as an admin, must be able to delete all the information related to one or more of his own Pubs.
  - [ ] 1.4. The user, authenticated as an admin, must be able to manage/see all the information related to one or more of his own Pubs.
- [ ] 2.  Handle all the data related to the Items.
  - [ ] 2.1. The user, authenticated as an admin, must be able to register a new item related to a Category and to one of his own Pubs.
  - [ ] 2.2. The user, authenticated as an admin, must be able to change the information of a certain item.
  - [ ] 2.3. The user, authenticated as an admin, must be able to delete the information of a certain item.
  - [ ] 2.4. The user must be able to see the item information in detail.
- [ ] 3. Handle all the data related to the Categories.
  - [ ] 3.1. The user, authenticated as an admin, must be able to register a new category.
  - [ ] 3.2. The user, authenticated as an admin, must be able to change the information of a certain category.
  - [ ] 3.3. The user, authenticated as an admin, must be able to delete the information of a certain category.
- [ ] 4. Handle all the data related to the Users.
    - [ ] 4.1. Anyone with access to the back-end Api can perform a registration on the platform.
    - [ ] 4.2. The user must be able change his own information when he intends to do so.
    - [ ] 4.3. The user must be able to delete his account.
- [ ] 5. Handle all the data related to the StarRatings.
    - [ ] 5.1. The user must be able to rate one item with an integer star classification from 1 to 5.
    - [ ] 5.2. The user must be able to check the rate of an item.
- [ ] 6. Handle all the data related to the Payments.
<!-- TODO -->
- [ ] 7. Handle all the data related to the Baskets.
    - [ ] 7.1. The user must be able to add items to his own basket.
    - [ ] 7.2. The user must be able to remove items from his own basket.
    - [ ] 7.3. The user must be able to check the items contained on his own basket.
<!-- TODO -->
- [ ] 7. Handle all the data related to the Orders.
<!-- TODO -->

### Notifications
- [ ] 1. The user must be able to receive a notification when his order as been accepted with a certain amount of time to wait.

### Orderings

- [ ] 1. The user must be able to order a certain ammount of items contained on his basket to his table.
- [ ] 2. The user must be able to cancel the order if it hasn't been accepted for preparation.
- [ ] 3. The user must be able notified when the order has been accepted for preparation.
- [ ] 4. The user, as a pub admin, can accept or reject the order.

### Payments

- [ ] 1. The user must be able to perform automatically the checkout (with respective payment) of all the items consumed using MBWay? or [Paypal](https://developer.paypal.com/docs/)? or other.
- [ ] 2. The user must be able to edit his own payment method changing his profile data.

## Tests

All the tests have been made using [Postman](https://www.getpostman.com/) and the well known JavaScript test framework [Mocha](https://mochajs.org/) for the Back-end.
