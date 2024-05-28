import { Routes, Route } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { Navbar } from "./components/navbar/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { SocialsWidget } from './components/SocialsWidget';
import { About, Catalog, Contacts, Home, News } from "./pages/index.js";

function App() {
  let isMobile = useMediaQuery({query: '(max-width: 950px)'});

  return (
    <>
      <Navbar isMobile={isMobile} />
      <Routes>
        <Route path="/" element={<Home isMobile={isMobile} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/news" element={<News isMobile={isMobile} />}></Route>
        <Route path="/catalog/:tag" element={<Catalog isMobile={isMobile} />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
      <Footer isMobile={isMobile} />
      <SocialsWidget />
    </>
  );
}

export default App;
