import { useState, useEffect } from "react";
import axios from "axios";
import image from "./mytest.jpeg";

const BookList = () => {
    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        const getBooks = () => {
            console.log('about to call book route')
            axios.get('http://localhost:8000/book/getlist')
            .then((res) => {
                setBookList(res.data);
            });
        }
        
        getBooks();
    }, []);

    return ( 
        <>
        <div className="book-list">
            {bookList.map(book => {
                if (book.title === null || book.title.includes('Test')) {
                    return null;
                }
                else {
                    return <div key={book._id} className="book">
                                <img className="book-image" src={book.image}></img>
                            </div>
                }
            })}
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </>
    );
}

export default BookList; 