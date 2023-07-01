import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react"
import './App.css';
import Movies from "./Pages/Movies"
import Series from "./Pages/Series"
import Search from "./Pages/Search"
import Trending from "./Pages/Trending";

import MainNav from "./Components/MainNav";
import { Container } from "@mui/material";
import Header from "./Components/Header";
import Error from "./Pages/Error";




function App() {
 
  return (
 <BrowserRouter>
   
    <Header />
   
  <div className="app">

  <Container>
       <Routes>
       
       <Route path='/' element={<Trending/>}  />
       <Route path='/movies' element={<Movies/>} />
       <Route path='/series' element={<Series/>} />
       <Route path='/search' element={<Search/>} />
       <Route path='/error' element={<Error/>} />
    
       </Routes>
   </Container>
      
</div>

    <MainNav />

    </BrowserRouter>

    );
}

export default App;
