import "./App.css";
import CharactersList from "./pages/CharactersList";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" element={<CharactersList />} />
      </Routes>
    </div>
  );
}

export default App;
