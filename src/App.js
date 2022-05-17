import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Recipes from "./components/Recipes/Recipes";
import ShoppingList from "./components/ShoppingList/ShoppingList";
import error from "./img/error-page.jpeg";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shopping_list" element={<ShoppingList />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route
          path="*"
          element={
            <main className="404-error container-fluid">
              <img
                className="img-fluid rounded mx-auto d-block"
                src={error}
                alt="404 error"
              />
            </main>
          }
        />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
