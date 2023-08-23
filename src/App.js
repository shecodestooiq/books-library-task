import "./App.css";
import Library from "./components/Library";
import { BooksProvider } from "./store/store";

function App() {
  return (
    <BooksProvider>
      <Library />
    </BooksProvider>
  );
}

export default App;
