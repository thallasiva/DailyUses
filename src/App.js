import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Comp1 from './Comp1.jsx';
import Pricing from './price.jsx';
import Home from './Home.jsx';
import Aboutus from './about.jsx';
import Contact from './contact';
import Comp2 from './Comp2.jsx';
import Comp3 from './Comp3.jsx';
import Comp4 from './Comp4.jsx';
import Comp5 from './Comp5.jsx';
import Comp6 from './Comp6.jsx';
import Comp7 from './Comp7.jsx';




function App() {
  return (
    <BrowserRouter>
       <Navbar/>
      <Routes>

        <Route path="/" element={ <> <Comp1 /> <Comp2 /> <Comp3/> <Comp4/> <Comp5/> <Comp6/> <Comp7/> </>} /> 
          
        <Route path= "/home" element= {<Home/>} />
        <Route path= "/pricing" element= {<Pricing/>} /> 
        <Route path= "/about" element= {<Aboutus/>}  />
        <Route path= "/contact" element= {<Contact/>}  />
        
      
      </Routes>
    </BrowserRouter>
    // <div>
    //   <Navbar/>
    // </div>
  );
}

export default App;
