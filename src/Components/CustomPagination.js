import React from "react";
import "../App.css"
import Pagination from '@mui/material/Pagination';


 const CustomPagination = ({ page,setPage, numOfPages = 10 }) => {

  // const [page, setPage] = React.useState(1);

  const handleChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: "80px",
      marginBottom: "80px",
    
    }}
    >


      <Pagination count={numOfPages} 
      page={page} 
      color="secondary"
      onChange={(e)=> handleChange(e.target.textContent)} />

     </div>
    
  );
}

export default CustomPagination;