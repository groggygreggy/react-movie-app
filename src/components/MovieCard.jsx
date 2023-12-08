import React from 'react'

function MovieCard({ propNameIsThis: {Year, Poster, Type, Title }}) {

  return (
    <div className="movie">
        <div>
          <p>{Year}</p>
        </div>

        <div>
          <img src={Poster} alt="poster" />
        </div>

        <div>
          <span>{Type}</span>
          <h3>{Title}</h3>
        </div>
    </div>
  )
}

export default MovieCard