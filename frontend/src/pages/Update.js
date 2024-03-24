import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Update() {
    const [newBook, setNewBook] = useState({
        title: '',
        description: '',
        cover: '',
        isAvailable: '',
    });

    const navigate = useNavigate();
    const location = useLocation();
    const bookId = location.pathname.split('/')[2];

    // setting all input values into state
    function handleInputChange(e) {
        setNewBook((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    async function handleUpdateBook(e) {
        e.preventDefault();

        try {
            // using axios to update the book in the db
            await axios.put(`http://localhost:8800/books/${bookId}`, newBook);
            // once the book is updated, go to home page
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className='addBookForm'>
            <h1>Update Book</h1>
            <input
                type='text'
                placeholder='Book title'
                name='title'
                onChange={handleInputChange}
            />
            <input
                type='text'
                placeholder='Book description'
                name='description'
                onChange={handleInputChange}
            />
            <input
                type='text'
                placeholder='Book cover'
                name='cover'
                onChange={handleInputChange}
            />
            <input
                type='text'
                placeholder='Is the book available?'
                name='isAvailable'
                onChange={handleInputChange}
            />

            <button onClick={handleUpdateBook}>Update</button>
        </div>
    );
}