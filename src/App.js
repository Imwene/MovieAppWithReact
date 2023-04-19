//import useState and useEffect
import {useState, useEffect} from 'react';
import MovieCard from './MovieCard';

import './App.css';
import searchIcon from './search.svg';

//omdb API URL
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=643a6484';

const movie = {
  "Title": "The Amazing Spiderman 2 Webb Cut",
  "Year": "2021",
  "imdbID": "tt18351128",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
}

const App = () => {
  //useEffect
  const [movies, setMovies] = useState([]);
  //search using async await
  const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      setMovies(data.Search);
  }
  //useEffect with dependancy array
  useEffect(() => {
      searchMovies('Bourne');
  }, [])

  //jsx wrapped in a single div element
  return (
    <div className="app">
      <h1>Imwene Movie Land</h1>

      <div className="search">
        <input placeholder = "Search Movies" value="Superman" onChange={()=>{}}>
        </input>
        <img src={searchIcon} alt='search' onClick={()=>{}} />
      </div>
    {/*Map through the movie and render movie card for each iteration of movie*/}
      {
        movies.length > 0 ? (
          <div  className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
                  
          </div>
        ) : (
          <div>
            <h2>No movies found</h2>
          </div>
        )
      }

      

    </div>
  );
}

export default App;
