import {Routes, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar.jsx";
import {Home} from "./pages/Home.jsx";
import {About} from "./pages/About.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
