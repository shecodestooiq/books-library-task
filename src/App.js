import './App.css';
import Home from './pages/home';
import {BooksProvider} from './components/BooksContext';

function App() {
  return <BooksProvider>
    <Home />
  </BooksProvider>

}

export default App;
