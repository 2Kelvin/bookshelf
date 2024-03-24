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

// middleware that parses the json string sent from client
// converts it (json string) to a javascript object & attaches it to request.body
// then finally pushes the request to the route handler function to use
app.use(express.json());

// home route
app.get('/', (req, res) => {
    res.json('This is the backend home route');
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
    const addBooksQuery = 'INSERT INTO books (`title`, `description`, `cover`) VALUES (?)';
    // new book info will be accessed thro the request's body
    const bookValues = [
        req.body.title,
        req.body.description,
        req.body.cover,
    ];
    bookshelfDb.query(addBooksQuery, [bookValues], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// express server application listening on port 3000
app.listen(8800, () => {
    console.log('********** Backend connected (Express server is running on port 8800) ********** ');
});

// enter this code in mysql to clear auth msql error
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';