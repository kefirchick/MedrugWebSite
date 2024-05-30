import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { SocialsWidget } from './components/SocialsWidget';
import { About, Catalog, Contacts, Home, News} from "./pages/index.js";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/catalog/:tag" element={<Catalog />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
      <Footer />
      <SocialsWidget />
    </>
  );
}

export default App;
