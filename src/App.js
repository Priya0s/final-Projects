import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';

import About from './Pages/About';
import Project from './Pages/Project';
import Services from './Pages/Services';
import Blog from './Pages/Blog';
import ContactPage from './Pages/ContactPage';
import Error from './Pages/Error';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route  path="/about" element={<About />} />
      <Route  path="/project" element={<Project />} />
      <Route  path="/services" element={<Services />} />
      <Route  path="/blog" element={<Blog />} />
      <Route  path="/contact" element={<ContactPage />} />
      <Route path='*' element={<Error />} />
    </Routes>
   
    </BrowserRouter>
  )
}
    
    
export default App;
