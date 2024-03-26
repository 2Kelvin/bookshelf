# The Bookshelf

![updatedBoookshelf](https://github.com/2Kelvin/bookshelf/assets/85868026/97721d14-97c9-43f0-88d7-3ef3fac86b6b)

## Introduction

The Bookshelf is a web app built for book clubs to upload books they have to share with the community and have them know if they're available for them to pick up and have a read.

The Bookshellf is built using React, NodeJS and MySQL.

This application is not complete yet, there are so many other features that will be added to the project, but the core functionality of the project is fully working.

## Requirements

To successfully run The Bookshelf web application, you need these packages / software:

- [x] MySQL
- [x] NodeJS | npm

## Installation

In your terminal, clone the project:

```sh
git clone https://github.com/2Kelvin/bookshelf.git
```

Navigate to the `backend` folder:

```sh
cd backend
```

Install the project's server dependencies:

```sh
npm i
```

Run the backend express server:

```sh
npm start
```

Then, navigate to the `frontend` folder:

```sh
cd ../frontend
```

Install the project's client dependencies:

```sh
npm i
```

Run the react app which will be displayed on your default browser:

```sh
npm start
```

## MySQL Error Fix

In the `backend/index.js` file, for users who set a MySQL password during mysql installation, add your password between the *''* in the *password: ''* field in these code sections. If you didn't set a MySQL password, you don't need to change anything here.

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

If you encounter a MySQL access error, follow these steps:

Access your MySQL in your terminal:

If you have a MySQL password run:
```sh
sudo mysql -u root -p
```

It will prompt you for your mysql password which you should then type in.

If you don't have a MySQL password run:
```sh
sudo mysql -u root
```

Finally:

If you have a MySQL password, run this command in your mysql shell:

```mysql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourPasswordHere';
```

If you don't have a MySQL password, run this command in your mysql shell:

```mysql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';
```

You can now rerun your backend server again as described [above](#installation).

## Usage

![nwBook](https://github.com/2Kelvin/bookshelf/assets/85868026/39f04c2c-3543-4ebc-85f3-76d8ff773644)

To add a book to the website, click the black 'add' button on the web page which will navigate you to 'add a book' page. Fill all the fields and finally to add your book click the 'add' button. If your book was successfully added, you should be navigated to the home page where you'll see the new book.

You can update the book details by clicking the update button. A book can also be deleted by clicking the delete button.

:bulb: Tip: For the book cover url add an online image link url to the book's cover. Preferably use amazon's book covers.

Note: I found a bug in this field where url on some image links doesn't work, I don't know why. The image links that worked for me, were the amazon website image book's cover links.

## Contribution

Feel free to contact me if you want to collaborate on this project.
