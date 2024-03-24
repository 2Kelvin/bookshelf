import express from 'express';
import mysql from 'mysql';


// creating my express server
const app = express();

// connecting to mysql
const sqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
});

// creating 'bookstore' db
const createDbQuery = 'CREATE DATABASE IF NOT EXISTS bookshelf';
sqlConnection.query(createDbQuery, (err, result) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('bookshelf database created successfully:', result);
});

// connecting to mysql 'bookstore' database
const bookshelfDb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bookshelf',
});

// creating 'books' table in bookstore db
const createTableQuery = 'CREATE TABLE IF NOT EXISTS books (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, title VARCHAR(80) NOT NULL, description VARCHAR(255) NOT NULL, cover VARCHAR(80) NULL)';
bookshelfDb.query(createTableQuery, (err, result) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('books table created successfully:', result);
});


// home route
app.get('/', (req, res) => {
    res.json('This is the backend');
});

// books routes
// returning all books in book-app db
app.get('/books', (req, res) => {
    const getBooksQuery = 'SELECT * FROM books';

    bookshelfDb.query(getBooksQuery, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// creating a new book into bookshelf.books table
app.post('/books', (req, res) => {
    
})

// express server application listening on port 3000
app.listen(8800, () => {
    console.log('********** Backend connected (Express server is running on port 8800) ********** ');
});

// enter this code in mysql to clear auth msql error
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';