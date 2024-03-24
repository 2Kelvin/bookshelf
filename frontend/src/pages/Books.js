import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Books() {
    // books contains the all the books fetched from the api
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // fetching all books data from our backend api
        async function fetchAllBooks() {
            try {
                const res = await axios.get('http://localhost:8800/books');
                console.log(res);
            } catch (err) {
                console.error(err);
            }
        }

        fetchAllBooks();
    }, []);

    return (
        <div>
            Books
        </div>
    );
}