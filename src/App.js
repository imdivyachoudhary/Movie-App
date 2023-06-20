import "./App.css";
import { Component } from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { movies } from "./data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
    };
  }

  addStars = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);

    if (movie.stars >= 5) return;

    movies[mid].stars += 0.5;
    this.setState({
      // movies: movies
      movies,
    });
  };

  decreaseStars = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);

    if (this.state.stars <= 0) return;

    movies[mid].stars -= 0.5;
    this.setState({
      movies,
    });
  };

  handleFav = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);

    movies[mid].fav = !movies[mid].fav;
    this.setState({
      movies,
    });
  };

  handleAddToCart = (movie) => {
    let { movies, cartCount } = this.state;
    const mid = movies.indexOf(movie);

    movies[mid].isInCart = !movies[mid].isInCart;
    if(movies[mid].isInCart){
      cartCount += 1
    }else{
      cartCount -= 1
    }
    this.setState({
      movies,
      cartCount
    });
  };
  render() {
    const { movies, cartCount } = this.state;
    return (
      <>
        <Navbar cartCount={cartCount} />
        <MovieList
          movies={movies}
          addStars={this.addStars}
          decreaseStars={this.decreaseStars}
          handleFav={this.handleFav}
          handleAddToCart={this.handleAddToCart}
        />
      </>
    );
  }
}

export default App;
