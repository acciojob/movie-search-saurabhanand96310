import 'regenerator-runtime/runtime';
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
   const [inputValue,setinputValue]=useState("")
   const [movies,setMovies]=useState([])
   
   
   const movieList=async()=>{
    const response=await fetch(`https://www.omdbapi.com/?t=${inputValue.toLowerCase()}&apikey=99eb9fd1&`)
    const value=await response.json();
    console.log(value)
      setMovies([value]);
   }

  return (
    <div>
        {/* Do not remove the main div */}
        <h2>Search Movie</h2>
        <input placeholder="search movie" onChange={(e)=>setinputValue(e.target.value)}></input>
        <button onClick={movieList}>Search</button>
         {
          movies ? movies.map((movie,index)=>(
            <ul key={index}>
              
              <li style={{gap:"10px",margin:"5px"}}>{movie.Title}</li>
              <img src={movie.Poster}/>
              </ul>
          )):(
            <p className="error">Invalid movie name. Please try again</p>
          
         )}

    </div>
  )
}

export default App
