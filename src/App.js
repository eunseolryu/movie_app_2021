import React from 'react';
import axios from 'axios';   // npm install axios로 다운 받고 import.
import Movie from './Movie';
import './App.css';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {  //awati를 사용하려면 async와 함께.
    const {
      data: {
        data: { movies }  //api에서 보면 data안에 data안에 movies가 있음.
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json")
    this.setState({ movies, isLoading: false })  // <- ({movies:movies}) <- state의 movies와 axios의 movies를 줄여서 사용가능.
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;  //movies는 위 api에 있는 movies목록
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    )
  }
}

  export default App;
