import './App.css';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import { IconContext } from 'react-icons';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function App() {
  return (
    <div className="container">
      <div className="box">
        {/*
        <IconContext.Provider value={{ size: "2em", className: "nav-icon" }}>
          <div><AiOutlineCloseCircle/></div>
        </IconContext.Provider>
         */}
        <AddBook/>
        <BookList/>
      </div>
      <div className="vl">
      </div>
    </div>
  );
}

export default App;  