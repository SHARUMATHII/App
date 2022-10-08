import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './routes/Home.jsx';
import Products from "./routes/Products.jsx";
import Settings from "./routes/Settings.jsx";
import Formss from "./routes/Formss.js";
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import './App.css';

const App=()=> {
  return (
    <BrowserRouter>
    <Header/>
    <Sidebar>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/products" element={<Products/>}/>
      <Route exact path="/settings" element={<Settings/>}/>
      <Route exact path="/formss" element={<Formss/>}/>
    </Routes>
    </Sidebar>
    </BrowserRouter>
  );
};

export default App;
