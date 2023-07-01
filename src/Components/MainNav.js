
import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { useNavigate } from "react-router-dom";
import "../App.css"


const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,

    color: 'black',
    zIndex: 10,

  },
});


const MainNav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();


  useEffect(() => {
    if (value === 0) {
      navigate("/");
    } else if (value === 1) {
      navigate("/movies");
    } else if (value === 2) {
      navigate("/series");
    } else if (value === 3) {
      navigate("/search");
    }
  }, [value, navigate]);


  return (
       
   <>    

<BottomNavigation 
  showLabels
  className={classes.root}
 
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}


>
<BottomNavigationAction label="Trending"   style={{ color: "#600080" }} icon={<WhatshotIcon />} />
  <BottomNavigationAction label="Movies"   style={{ color: "#600080" }} icon={<MovieCreationIcon/>}  />
  <BottomNavigationAction label="Series"   style={{ color: "#600080" }} icon={<LiveTvIcon />} />
  <BottomNavigationAction label="Search"   style={{ color: "#600080" }} icon={<SearchIcon />} />

 
</BottomNavigation>
</>


  )}


export default MainNav;


