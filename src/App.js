import {useEffect} from 'react';
import './App.css';
//643a6484

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=643a6484'

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
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

export default App;
