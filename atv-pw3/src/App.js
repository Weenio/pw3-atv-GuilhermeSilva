import logo from './logo.svg';
import './App.css';

import BookReader from './components/BookReader';
import BookCard from './components/BookCard';

import beserk from './images/capalivro.jpg'

function App() {
  return (
    <div className="App">
        <div className="leftCol">
          <BookCard
            img={beserk}
          />
        </div>
        <BookReader/>
    </div>
  );
}

export default App;
