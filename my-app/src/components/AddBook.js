import axios from "axios";
import { useState } from "react";

// https://www.youtube.com/watch?v=LGcgChoD_qY (reference)

const AddBook = () => {
    const [searchTitle, setSearchTitle] = useState('');
    const [searchList, setSearchList] = useState('');
 
    const handleResponse = () => {
        // axios format: https://axios-http.com/docs/res_schema
        // call Google API to get book based on what was searched  
        axios.post('http://localhost:8000/gBook/searchgbooks', {
            search: searchTitle
        })  
        .then((res) => {
            // route returns the json result from Google API call
            const title = res.data.items[0]["volumeInfo"]["title"];
            const auth = res.data.items[0]["volumeInfo"]["authors"][0] || "";
            const img = res.data.items[0]["volumeInfo"]["imageLinks"]["thumbnail"];

            return axios.post('http://localhost:8000/book/addbook', {
                title: title,
                author: auth,
                image: img
            });
        })
        .then((res) => {
            setSearchTitle('');
        })

        /*
        .catch((err) => {
            // handle err
        });
        */
    }
    
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleResponse();
        }
    }
    
    return (
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
    );
}

export default AddBook;