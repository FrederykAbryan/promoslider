import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbars from "./pages/Navbar";
import Promo from "./pages/Promo";
import Program from "./pages/Program";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";

function App() {
  return (
    <main>
      <Router>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promo" element={<Promo />} />
          <Route path="/program" element={<Program />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
