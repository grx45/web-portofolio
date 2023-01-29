import Introduction from "./Component/Introduction";
import Navbar from "./Component/Navbar";
import History from "./Component/History";
import "flowbite";
import "./App.css";
import Contact from "./Component/Contact";
import Skills from "./Component/Skills";
import Footer from "./Component/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <History />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
