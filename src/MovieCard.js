import React from "react";

class MovieCard extends React.Component {
  render() {
    const {movie, addStars, decreaseStars, handleFav, handleAddToCart} = this.props;
    const { title, plot, price, rating, stars, fav, isInCart, poster } = movie;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              alt="Poster"
              src={poster}
            />
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">{price}</div>
            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  className="str-btn"
                  alt="decrease"
                  src="https://cdn-icons-png.flaticon.com/128/56/56889.png"
                  onClick={() => {decreaseStars(movie)}}
                />
                <img
                  className="stars"
                  alt="star"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                />
                <img
                  className="str-btn"
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                  // onClick={this.addStars.bind(this)}
                  onClick={() => {addStars(movie)}}
                />
                <span className="starCount">{stars}</span>
              </div>
              {/* {fav ? (
                <button className="unfavourite-btn" onClick={this.handleFav}>
                  Un-Favourite
                </button>
              ) : (
                <button className="favourite-btn" onClick={this.handleFav}>
                  Favourite
                </button>
              )} */}

              <button
                className={fav ? "unfavourite-btn" : "favourite-btn"}
                onClick={() => {handleFav(movie)}}
              >
                {fav ? "Un-Favourite" : "Favourite"}
              </button>
              <button
                className={isInCart? "unfavourite-btn" : "cart-btn"}
                onClick={() => handleAddToCart(movie)}
              >
                {isInCart ? "Remove from Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
