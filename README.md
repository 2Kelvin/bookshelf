# Bookstore

![bookshelfFinal](https://github.com/2Kelvin/bookshelf/assets/85868026/13d7928d-3603-45d7-b714-3f9cee878b7b)

## Introduction

Bookshelf is a web application built for book study groups where they can upload books to share with the community and have them know if they're available for them to pick up and read.

Bookshellf is built using React, NodeJS and MySQL.

The application is not complete yet, there are so many other features that will be added to the project, but the basic book details upload and availability of the book check for community users to see and probably pick up the book is functional which actually is the core of the project.

## Requirements

To successfully run bookshelf web application, you need these packages / software:

- [x] MySQL
- [x] NodeJS | NPM

## Usage

Clone the project:

```sh
git clone https://github.com/2Kelvin/bookshelf.git
```

Navigate to `backend` folder:

```sh
cd backend
```

Install project's server dependencies:

```sh
npm i
```

Run the backend express server:

```sh
npm start
```

Navigate to `frontend` folder:

```sh
cd ../frontend
```

Install project's client dependencies:

```sh
npm i
```

Run the react app:

```sh
npm start
```

## MySQL Error Fix

In `backend/index.js` file replace these code sections with your MySQL password, if you set a MySQL password. If you didn't set a MySQL password, you don't need to change anything here.

```javascript
// connecting to mysql
const sqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
});
```

```javascript
// connecting to mysql 'bookshelf' database
const bookshelfDb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bookshelf',
});
```

If you encounter a MySQL access to database denied error, follow these steps:

Access your MySQL in your terminal:

If you have a MySQL password run:
```sh
sudo -u root -p
```

If you don't have a MySQL password run:
```sh
sudo -u root
```

Then:

If you have a MySQL password, run this command:

```mysql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourPasswordHere';
```

If you don't have a MySQL password, run this command:

```mysql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';
```

You can now rerun your backend server again as described above.

## Contribution

Feel free to contact me if you want to collaborate on this project.