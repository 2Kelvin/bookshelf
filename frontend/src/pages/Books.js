import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Books() {
    // books contains the all the books fetched from the api (array of book objects)
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // fetching all books data from our backend api
        async function fetchAllBooks() {
            try {
                const res = await axios.get('http://localhost:8800/books');
                // res.data contains the array of book objects
                setBooks(res.data);
            } catch (err) {
                console.error(err);
            }
        }

        fetchAllBooks();
    }, []);

    async function handleDeleteBook(bookId) {
        try {
            await axios.delete(`http://localhost:8800/books/${bookId}`);
            // refreshing the browser page
            window.location.reload();
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className='containerBooks'>
            <h1>The Bookshelf</h1>
            <div className='books'>
                {
                    // books contains res.data (array of book objects)
                    books.map((book) => (
                        <div className='book' key={book.id}>
                            {book.cover && <img src={book.cover} alt='book' />}
                            <div className='bookDetails'>
                                <h2>{book.title}</h2>
                                <p>Author: {book.author}</p>
                                <p className='bookDesc'>{book.description}</p>
                                <p>Available: <span>{book.isAvailable}</span></p>
                                <button className='updateBtn'>
                                    <Link to={`/update/${book.id}`}>Update</Link>
                                </button>
                                <button className='deleteBtn' onClick={() => handleDeleteBook(book.id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>

            <button>
                <Link to='/add'>Add a book</Link>
            </button>
        </div>
    );
}