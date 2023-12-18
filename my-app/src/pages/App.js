import '../App.css';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';

function App() {
  return (
    <div className="container">
      <div className="box">
        <AddBook/>
        <BookList/>
      </div>
      <div className="vl">
      </div>
    </div>
  );
}

export default App;  