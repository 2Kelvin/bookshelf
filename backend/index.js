import express from 'express';
import mysql from 'mysql';


// creating my express server
const app = express();

// connecting to mysql database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bookstore-app',
});

// home route
app.get('/', (req, res) => {
  res.json('This is the backend');
});

// books route
// returning all books in book-app db
app.get('/books', (req, res) => {
  const booksQuery = 'SELECT * FROM books';

  db.query(booksQuery, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// express server application listening on port 3000
app.listen(8800, () => {
  console.log('********** Backend connected (Express server is running on port 8800) ********** ');
});

// RESUME FROM 13:00
// YOU NEED TO CREATE THE DATABASE (bookstore-app) & TABLE (books) BEFORE app.get & app.post