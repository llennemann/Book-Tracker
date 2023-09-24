import { useState, useEffect } from "react";
import axios from "axios";
import image from "./mytest.jpeg";

const BookList = () => {
    const [bookList, setBookList] = useState('');

    /*
    useEffect(() => {
        const getBooks = async () => {
            console.log("flag");
            const res = await axios.get('/getlist');
            setBookList(res.data);
            console.log(res.data);
        }

        getBooks();
    }, []);
    */

    return (
        <>
        <div className="book-list">
            <div className="book">
                <h2>The Raven Boys</h2>
                <img src={image}></img>
            </div>
            <div className="book">
                <h2>The Raven Boys</h2>
                <img src={image}></img>
            </div>
            <div className="book">
                <h2>The Raven Boys</h2>
                <img src={image}></img>
            </div>
            <div className="book">
                <h2>The Raven Boys</h2>
                <img src={image}></img>
            </div>
            <div className="book">
                <h2>The Raven Boys</h2>
                <img src={image}></img>
            </div>
            <div className="book">
                <h2>The Raven Boys</h2>
                <img src={image}></img>
            </div>
            <div className="book">
                <h2>The Raven Boys</h2>
                <img src={image}></img>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </>
    );
}

export default BookList; 