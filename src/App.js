import './App.css';
import SearchIcon from './search.svg';
import { useEffect, useState } from 'react';
import MovieCard from './components/MovieCard';

const api_url = 'http://www.omdbapi.com/?i=tt3896198&apikey=5d54b830';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    searchMovies('avengers');
  }, [])

  async function searchMovies(title) {
    const response = await fetch(`${api_url}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input 
            type="text" 
            placeholder='Search for movies'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        <img src={SearchIcon} alt="search" 
        onClick={() => searchMovies(searchTerm)} />
      </div>

      {
        movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard propNameIsThis={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;