import "./App.css";
import BooksGrid from "./components/BooksGrid";
import FirstSection from "./components/FirstSection";
import Search from "./components/Search";
import { InputProvider } from "./providers/booksContext";


function App() {
  return (
    <>
      <FirstSection />
    

      <InputProvider>
        <Search />
        <BooksGrid />
      </InputProvider>
    </>
  );
}

export default App;
