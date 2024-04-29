import { Routes, Route } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { News } from "./pages/News";
import { Catalog } from "./pages/Catalog";
import { Service } from "./pages/Service";
import { Contacts } from "./pages/Contacts";

function App() {
  let isMobile = useMediaQuery({query: '(max-width: 950px)'});

  return (
    <>
      <Navbar isMobile={isMobile} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        {/* <Route exact path="/index" render={() => {window.location.href="/index.html"}} /> */}
      </Routes>
      <Footer isMobile={isMobile} />
    </>
  );
}

export default App;
