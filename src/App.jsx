import { Routes, Route } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { Navbar } from "./components/navbar/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { About, Catalog, Contacts, Home, News, Service } from "./pages/index.js";

function App() {
  let isMobile = useMediaQuery({query: '(max-width: 950px)'});

  return (
    <>
      <Navbar isMobile={isMobile} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/catalog/:tag" element={<Catalog />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
      <Footer isMobile={isMobile} />
    </>
  );
}

export default App;
