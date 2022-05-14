import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Recipes from "./components/Recipes/Recipes";
import ShoppingList from "./components/ShoppingList/ShoppingList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shopping_list" element={<ShoppingList />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
