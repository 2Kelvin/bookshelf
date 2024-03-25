import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Add() {
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
        description: '',
        cover: '',
        isAvailable: '',
    });

    const navigate = useNavigate();

    // setting all input values into state
    function handleInputChange(e) {
        setNewBook((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    async function handleAddBookToServer(e) {
        e.preventDefault();

        try {
            // bookInputs form the new book
            // using axios to send the new book to server
            // and have it added to bookshelf.books (database)
            await axios.post('http://localhost:8800/books', newBook);
            // once the new book is added, go to home page
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className='containerAddUpdate'>
            <div className='addBookForm'>
                <h1>Add a Book</h1>
                <input
                    type='text'
                    placeholder='Book title'
                    name='title'
                    onChange={handleInputChange}
                />
                <input
                    type='text'
                    placeholder='Book author'
                    name='author'
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

                <button onClick={handleAddBookToServer}>Add</button>
            </div>
        </div>
    );
}