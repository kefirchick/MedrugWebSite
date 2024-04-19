import {Routes, Route} from "react-router-dom";
import {useMediaQuery} from 'react-responsive'
import {Navbar} from "./components/Navbar.jsx";
import {NavbarMobile} from "./components/NavbarMobile.jsx";
import {Home} from "./pages/Home.jsx";
import {About} from "./pages/About.jsx";

function App() {
  let isMobile = useMediaQuery({query: '(max-width: 950px)'});

  return (
    <>
      {isMobile? <NavbarMobile /> : <Navbar />}
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
