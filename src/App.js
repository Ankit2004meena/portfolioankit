import { Button} from '@mui/material';
import './App.css';
import  Navbar  from './component/Navbar.js';

import Home from "./component/Home.jsx";
import Skills from "./component/Skills/Skills.js"
import Project from './component/Project/Project.js';
import Contact from './component/Contact/Contact.js';
import Footer from './component/Footer/Footer.js';
function App() {
    return (
      <> 
      <Navbar />

        <Home/>
        <Skills/>
        <Project/>
        <Contact/>
        <Footer/>
 
      </>
    );
  }
  
  export default App;