import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import Favourite from "./pages/Favourite/Favourite";
import Loginn from "./pages/Login/Loginn";
import Signin from "./pages/Signin/Signin";

import "@splidejs/react-splide/css";
function App() {
  return (
    <>
      <Navbar />
      <Loginn />
      <Footer />
    </>
  );
}

export default App;
