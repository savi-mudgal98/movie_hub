import {Chip} from "@mui/material"
import axios from "axios";
import { useEffect } from "react";
import "../App.css"

const Genres = ({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage,
}) => {


  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleDelete = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setGenres(data.genres);
    // console.log(data.genres);
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({}); // unmounting
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
   
 <div style={{padding:"6px 0", color:"black"}}>

 {selectedGenres.map((genre) => (

<Chip
style={{ margin: 2 }}
label={genre.name}
key={genre.id}
className="genSelect"
color="primary"
clickable
size="small"
onDelete={() => handleDelete(genre)}
/>
))}

{genres && genres.map((genre)=>(
  
     <Chip
  style={{ margin: 2 }}
  label={genre.name}
  key={genre.id}
  className="gen"
  clickable
  size="small"
  onClick={() => handleAdd(genre)}
     />
))} 



</div> 

</>
  );
}
 
export default Genres;

