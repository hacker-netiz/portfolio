
import './App.css';

import {Header} from "./components/header";
import Home from "./components/home";
import About from "./components/About";
import Contact from "./components/Contact";
import User from "./components/User";
import { BrowserRouter , Route , Routes} from 'react-router-dom'

// function Fun(props) {
//   return (
//     <>
//         <div className={props.cn}>hello {props.name}</div>
//         <hr />
//     </>
//   );
// }

function App() {
  return (
   <BrowserRouter>
     {/* <Fun name = "abhishek" cn = {1} />
    <Fun name = "sharma" cn = {2} />
    <Fun name = "zenvent" cn = {3} />
    <Fun name = "cjabhi" cn = {4} /> */}
    {/* <About />
    <Contact /> */}
    {/* <Comp1 /> */}
    <Header />
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/about" element = {<About />} />
      <Route path="/contact" element = {<Contact />} />
      <Route path="/user/abhishek" element = {<About />} />
      <Route path="/user/:id" element = {<User />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
