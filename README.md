# cautious-chainsaw
Repository for module 18  - NoSQL Challenge: Social Network API

## Description
### Introduction
MongoDB stands out as a preferred choice for numerous social networks, prized for its adept handling of large datasets and adaptability to unstructured data.  
In the world of social networking platforms, the amalgamation of MongoDB with various technologies is integral to constructing robust full-stack applications.  
This application is poised to leverage these technologies to craft an efficient and scalable solution.

### Objective
The primary goal of this challenge is to develop a sophisticated API for a social network web application.  
This platform aims to facilitate users in sharing their thoughts, expressing reactions to friends' thoughts, and establishing a friend list.  
At its core, the application will harness the power of Express.js for seamless routing, employ a MongoDB database for data storage,  
and integrate the Mongoose Object Data Modeling (ODM) library for enhanced interaction with the database.   
Building a well-structured API lays the foundation for a dynamic and responsive social networking experience.

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
Must have MongoDB and Node installed    
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
4. Seed the data (load the data into the database) if desired. It is not required to use the app:
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
https://drive.google.com/file/d/1n582889AYBMENYICzN6dN6F8j2Q-PHCC/view

