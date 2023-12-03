import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "../src/pages/home/Home";
import About from "../src/pages/about/About";
import Login from "../src/pages/forms/Login";
import Register from "../src/pages/forms/Register";
import SingleTour from "../src/pages/tour/SingeTour";
import "./App.css";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour/:id" element={<SingleTour />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
