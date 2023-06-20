import { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component {

  render() {
    const {movies, addStars, decreaseStars, handleFav, handleAddToCart} = this.props;
    return (
      <>
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            movie={movie}
            addStars={addStars}
            decreaseStars={decreaseStars}
            handleFav={handleFav}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </>
    );
  }
}

export default MovieList;
