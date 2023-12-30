import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// https://www.youtube.com/watch?v=LGcgChoD_qY (reference)

const AddBook = ({ onBkAdded }) => {
    const [searchTitle, setSearchTitle] = useState('');
    const [errMessage, setErrMessage] = useState('false');
 
    const handleResponse = () => {
        // axios format: https://axios-http.com/docs/res_schema

        // request Google API to get book based on what was searched  
        axios.post('http://localhost:8000/gBook/searchgbooks', {
            search: searchTitle
        })  
        .then((res) => {
            // json result from Google API call: extract info
            const title = res.data.items[0]["volumeInfo"]["title"];
            const auth = res.data.items[0]["volumeInfo"]["authors"][0] || "";
            const img = res.data.items[0]["volumeInfo"]["imageLinks"]["thumbnail"];

            setSearchTitle(''); // set searched entry to empty

            // call post route to add book to mongo database
            return axios.post('http://localhost:8000/book/addbook', {
                title: title,
                author: auth,
                image: img
            });
        })
        .catch((err) => {
            // if post route returns error 404 - duplicate book
            console.log(err);
            setErrMessage('true', () => console.log(errMessage));
        });

        // retrieve current book list
        axios.get('http://localhost:8000/book/getlist')
        .then((res) => {
            onBkAdded(res.data); // call onBkAdded to rerender the pg with new book list
        })
        
        if (errMessage === 'true') {
            toast.success("Success Notification !", {
                position: toast.POSITION.TOP_RIGHT,
              })
        }
    }
    
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleResponse();
        }
    }
    
    return (
        <>
        <div className="add-book-form">
            <input 
                value={ searchTitle }
                onChange={e => setSearchTitle(e.target.value)}
                onKeyDown={handleKeyPress}
                type="search"
                placeholder="Add a book"
                size="50"
                />
            <button onClick={ handleResponse }>Search Title</button>
        </div>
        <ToastContainer />
        </>
    );
}

export default AddBook;