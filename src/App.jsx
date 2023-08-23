import "./App.css";
import BooksGrid from "./components/BooksGrid";
import FirstSection from "./components/FirstSection";
import Search from "./components/Search";

function App() {
  return (
    <>
      <FirstSection />
      <Search/>
      <BooksGrid/>
    </>
  );
}

export default App;
