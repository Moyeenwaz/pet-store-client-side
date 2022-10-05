import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import Favourite from "./pages/Favourite/Favourite";
import Loginn from "./pages/Login/Loginn";
import Signin from "./pages/Signin/Signin";
import Empty from "./pages/EmptyCart/Empty";
import EmptySection from "./pages/EmptyFav/Empty";
import { Routes, Route } from "react-router-dom";

import "@splidejs/react-splide/css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Navbar />
      <EmptySection />
      <Footer /> */}
    </>
  );
}

export default App;
