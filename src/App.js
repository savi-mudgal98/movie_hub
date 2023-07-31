import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react"
import {createContext} from "react";
import './App.css';
import Movies from "./Pages/Movies"
import Series from "./Pages/Series"
import Search from "./Pages/Search"
import Trending from "./Pages/Trending";

import MainNav from "./Components/MainNav";
import { Container } from "@mui/material";
import Header from "./Components/Header";
import Error from "./Pages/Error";
import Switch from '@mui/material/Switch';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import NightlightIcon from '@mui/icons-material/Nightlight';


export const ThemeContext = createContext(null);


function App() {
  

  const [theme, setTheme] = React.useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  return (
    <>
   
 <BrowserRouter>

    <Header />
    <ThemeContext.Provider value={{ theme, toggleTheme }}>

  <div className="app"  id={theme}>

  <div className="switch">
    <p class="lig">light</p>
         <Brightness5Icon style={{color:'pink'}}/>
      
          <Switch
          color="secondary"
          onChange={toggleTheme} 
          checked={theme === "dark"}
          inputProps={{ 'aria-label': 'Color switch demo' }}
          label="dark mode"
          // {...theme === "light" ? "Light Mode" : "Dark Mode"}
          // label={"{theme}"}
           />
           <NightlightIcon style={{color:'pink'}}/>
           <p class="dar">dark</p>
  </div>
  
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

 
  
   </ThemeContext.Provider>
    </BrowserRouter>
  
   </>
    );
}

export default App;
