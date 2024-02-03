# cautious-chainsaw
Repository for module 18  - NoSQL Challenge: Social Network API

## Description
### Introduction
MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data.  
This app will use several of the technologies that social networking platforms use in their full-stack applications.  
Because the foundation of these applications is data, it’s important to understand how to build and structure the API first.

### Objective
This challenge is to build an API for a social network web application where users can share their thoughts,  
react to friends’ thoughts, and create a friend list.  
The app will use Express.js for routing, a MongoDB database, and the Mongoose ODM

## Table of Contents
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation and Usage](#installation-and-usage)
- [Features](#features)
- [License](#license)
- [Walkthrough Video](#walkthrough-video)

## User Story
AS A social media startup  
I WANT an API for my social network that uses a NoSQL database  
SO THAT my website can handle large amounts of unstructured data


## Acceptance Criteria  
GIVEN a social network API
WHEN I enter the command to invoke the application  
THEN my server is started and the Mongoose models are synced to the MongoDB database  
WHEN I open API GET routes in Insomnia for users and thoughts  
THEN the data for each of these routes is displayed in a formatted JSON  
WHEN I test API POST, PUT, and DELETE routes in Insomnia  
THEN I am able to successfully create, update, and delete users and thoughts in my database  
WHEN I test API POST and DELETE routes in Insomnia  
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Installation and Usage
Must have a mysql account to use database  
To install the cautious-chainsaw, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/C-Johnson83/cautious-chainsaw.git
2. Change to the project directory:
    ```bash  
    cd cautious-chainsaw  
3. Install the required dependencies using npm:  
    ```bash
    npm i  
4. Seed the data (load the data into the database) if desired. It is not required to use the database:
    ```bash
    npm run seed  
14. Run the following command to start the app
    ```bash
    npm start   
15. Now you can view the data in an api viewer such as Insomnia, Postman, or Apidog
 
## Features
- User Management:  
    Create, Read, Update, Delete (CRUD) operations for users  
- Thoughts Management:  
CRUD operations for user thoughts  
- Reactions:  
Add and delete reactions to thoughts  
- Friend Management:  
Add and remove friends to a user’s friend list  

## License
This project is licensed under the MIT license.  
License Link  
https://opensource.org/licenses/MIT   
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]  

## Walkthrough Video
The video demo showcases how to display the data using Insomnia, but there are many alternatives.

### Demo


