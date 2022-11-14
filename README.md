# Social Network API with NoSQL / Mongoose
![License Badge](https://shields.io/badge/license-ISC-green)


## Video Demo
[DEMO](https://watch.screencastify.com/v/8RxjCLKIki2kBfa2OImA)

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [License](#license)
7. [Questions](#questions)

## Description
This is a simple app that serves as the back-end API for a social network site. Built from scratch, it makes use of [Express](https://www.npmjs.com/package/express) for all of the routing, [MongoDB](https://www.mongodb.com/) for its database, the [Mongoose](https://www.npmjs.com/package/mongoose) ODM to connect the database to the Express server, and [Moment](https://www.npmjs.com/package/moment) to format dates and timestamps. Users will be able to use this API through [Insomnia](https://insomnia.rest/) to post and update their thoughts, view and react to others' thoughts, add and delete friends, as well as add and delete thoughts and users.


## Installation
To install, clone this repository to your local machine:

<img width="415" alt="Screen Shot 2022-11-14 at 1 40 30 PM" src="https://user-images.githubusercontent.com/107421370/201740096-801c7791-7023-40ba-a747-5140c321a582.png">

<img width="872" alt="Screen Shot 2022-11-14 at 1 42 07 PM" src="https://user-images.githubusercontent.com/107421370/201740473-90032369-61f7-4068-bc33-59492bf2738c.png">


And install the following dependencies:

* [Mongoose](https://www.npmjs.com/package/mongoose)
* [Express](https://www.npmjs.com/package/express)
* [Moment](https://www.npmjs.com/package/moment)

<img width="540" alt="Screen Shot 2022-11-14 at 1 42 49 PM" src="https://user-images.githubusercontent.com/107421370/201740507-e6a2f08b-ec3d-438e-9862-24822ab47dd5.png">

(These dependencies will be in ```the package.json``` file)

Once the necessary dependencies are installed, start the server by going to the terminal and entering the command ```node server.js```:

<img width="648" alt="Screen Shot 2022-11-14 at 1 44 21 PM" src="https://user-images.githubusercontent.com/107421370/201740704-53fe0a10-88d8-45d8-b171-18c693c4f485.png">

From there, you will be able to use this application in [Insomnia](https://insomnia.rest/)!


## Usage
Users will be able to use this API through [Insomnia](https://insomnia.rest/). While the server is running, users will be able to...

Get all users ```/api/users```:

<img width="1591" alt="get-users" src="https://user-images.githubusercontent.com/107421370/201748108-da98a6d2-d560-4d3e-8da5-c3dd6bdcce22.png">

Get a user by their ID ```/api/users/:userId```:

<img width="1591" alt="user-id" src="https://user-images.githubusercontent.com/107421370/201748274-5f622759-eb31-4e5d-bd02-12b5e82cf11d.png">

Update a user ```/api/users/:userId```:

<img width="1591" alt="update-user" src="https://user-images.githubusercontent.com/107421370/201748396-7f4f6816-761e-47af-99fe-3f0113e30a45.png">

Create a user ```/api/users```:

<img width="1593" alt="create-user" src="https://user-images.githubusercontent.com/107421370/201749331-f1ed4c20-eb09-4c5b-b517-6b94a513913e.png">

Add a friend ```/api/users/:userId/friends/:friendId```:

<img width="1589" alt="add-friend" src="https://user-images.githubusercontent.com/107421370/201748534-a22ec5ef-1bb4-4502-9350-23d5a5e9dcea.png">

Get all thoughts ```/api/thoughts```:

<img width="1590" alt="get-thoughts" src="https://user-images.githubusercontent.com/107421370/201748877-4b92f83d-7f94-4b1e-9e94-8839e9f5311c.png">

Get a thought by ID ```/api/thoughts/:thoughtId```:

<img width="1589" alt="thought-id" src="https://user-images.githubusercontent.com/107421370/201749027-1a861c56-5ff9-42f0-a8f2-e208b66b6ecc.png">

Update a thought ```/api/thoughts/:thoughtId```:

<img width="1593" alt="update-thought" src="https://user-images.githubusercontent.com/107421370/201749132-2e612784-3fca-416f-9a74-0f6c2662657a.png">

Create a thought ```/api/thoughts/```:

<img width="1589" alt="create-thought" src="https://user-images.githubusercontent.com/107421370/201749484-ec37f35e-a501-461d-b8e5-eb469adcdec0.png">

Add a reaction ```/api/thoughts/:thoughtId/reactions```:

<img width="1590" alt="add-reaction" src="https://user-images.githubusercontent.com/107421370/201749638-ba4008a4-7c37-4766-80d1-c6441138169a.png">

As well as delete reactions by their reaction ID ```/api/thoughts/:thoughtId/reactions/:reactionId```, friends by their user ID, thoughts by their ID, and users by their ID.



## Contributing
You can contribute to this project by submitting bugs via [ISSUES](https://github.com/StephCambria/SocialNetworkAPI/issues).
## Tests
All testing was done locally through [Insomnia](https://insomnia.rest/).


## License
This application is licensed under the ISC license.

## Questions
You can find me [HERE](https://github.com/StephCambria) on Github.
You can email me at steph.cambria.art@gmail.com if you have any additional questions.
