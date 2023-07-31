import React from 'react'
import axios from "axios";
import "../App.css"
import { useEffect, useState } from "react";
import SingleContent from "../Components/SingleContent";
import CustomPagination from "../Components/CustomPagination";


const Trending = () => {
  
  const [content, setContent] = useState([]);
  const [page ,setPage] = useState(1);

  const fetchTrending = async () => {
    
      try {
        const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
       
        // console.log(data);
        setContent(data.results);
        }
     
        catch (error) {
          // Handle any errors that occurred during the fetch
          console.error('Error:', error.message);
        }
      }
  
  useEffect(() => {
   window.scroll(0,0);
    fetchTrending();
   //eslint-disable-next-line
  }, [page]);


  return (
     <>
    
     <span className="pageTitle">Trending Today</span>
     
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
            key={c.id}
            id={c.id}
            poster={c.poster_path}
            title={c.title || c.name}
            date={c.first_air_date || c.release_date}
            media_type={c.media_type}
            vote_average={c.vote_average}/>)
          )
};

</div>

<CustomPagination setPage={setPage} />
</>

  )};

export default Trending;
  
