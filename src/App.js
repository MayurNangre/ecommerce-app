import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Ourstore from './Pages/ourstore';

function App(){
  return(
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >

            <Route index element={<Home/>}/>
            <Route path='About' element={<About/>}/>
            <Route path='Contact' element={<Contact/>}/>
            <Route path='Store' element={<Ourstore/>}/>

          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
