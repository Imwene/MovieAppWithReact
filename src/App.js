import {useEffect} from 'react';
import MovieCard from './MovieCard';

import './App.css';
import searchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=643a6484';

const movie1 = {
  "Title": "The Amazing Spiderman 2 Webb Cut",
  "Year": "2021",
  "imdbID": "tt18351128",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
}

const App = () => {

  const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      console.log(data);
  }

  useEffect(() => {
      searchMovies('Spiderman');
  }, [])

  return (
    <div className="app">
      <h1>Imwene Movie Land</h1>

      <div className="search">
        <input placeholder = "Search Movies" value="Superman" onChange={()=>{}}>
        </input>
        <img src={searchIcon} alt='search' onClick={()=>{}} />
      </div>

      <div  className="container">
        <MovieCard movie1={movie1} />        
      </div>

    </div>
  );
}

export default App;
