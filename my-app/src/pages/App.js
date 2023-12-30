import '../App.css';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';
import ToReadList from './toReadList';


function App() {

  return (
    <div className="container">
      <div className="box">

        <ToReadList />
      </div>
      <div className="vl">
      </div>
    </div>
  );
}

export default App;  