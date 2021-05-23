# The Tech Blog

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-green)
![node](https://img.shields.io/badge/node-14-green)
![expressjs](https://img.shields.io/badge/express-4-blue)
![MySQL](https://img.shields.io/badge/MySQL-8-blue)

## Description

Keep up to speed with the latest tech by browsing through this streamlined tech blog. Create and account to add posts and make comments on existing posts.

## Table of Contents

  * [Installation](#installation)

  * [Database Setup](#databasesetup)

  * [Usage](#usage)

  * [Contribution](#contribution)

  * [Questions](#questions)

## Installation

First, install `Node.js 14` and `MySQL 8` or newer on your system. Then clone this repository and navigate to the local folder via command line. Next install the necessary packages with `npm install` at the root of local repository. See respective documentation in the links below.

* [Node](https://nodejs.org/en/)

* [Express](https://docs.npmjs.com/cli/v7/commands/npm-install)

* [Nodemailer](https://nodemailer.com/about/)

* [MySQL](https://dev.mysql.com/)

* [Sequelize](https://www.npmjs.com/package/sequelize)

## Database Setup

In MySQL, create a database by the name of `mailflyer_db`. Then create a .env file at the root of your local repository and paste in the below text, replacing ***your_username*** and ***your_password*** with your MySQL username and password.

```
DB_NAME='techblog_db'
DB_USER='your_username'
DB_PW='your_password'
```

Now seed the database by running the following command:

```
node seeds/index
```

## Usage

Start the server using the following command at the root of your local repository:

```
npm start
```

Once there server is running, you can now access the application by pasting the following address in your web browser.

```
localhost:3001
```

On the landing page you can view existing posts. You can login or create an account using the the top navbar to start creating new posts and comments.

## Demo Site

[View a deployed demo site.](https://lit-refuge-89612.herokuapp.com/)

## Questions

Direct questions to:

* [brandonag](https://github.com/brandonag)