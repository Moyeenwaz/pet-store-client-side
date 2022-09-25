import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import "@splidejs/react-splide/css";
function App() {
  return (
    <>
      <Navbar />
      <Store />
      <Footer />
    </>
  );
}

export default App;
