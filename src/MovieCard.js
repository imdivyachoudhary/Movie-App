import React from "react";

class MovieCard extends React.Component {
  constructor() {
    super();
    this.state = {
      titel: "The Avengers",
      plot: "Supernatural powers shown in the movie.",
      price: 199,
      rating: 8.9,
      stars: 0,
      fav: false,
      isInCart: false,
    };
    // this.addStars = this.addStars.bind(this);
  }
  // addStars(){
  //    console.log(this.state);
  // }
  addStars = () => {
    if (this.state.stars >= 5) return;
    // console.log(this.state);
    // this.state.stars += 0.5

    //set state form1
    // this.setState({
    //   stars: this.state.stars + 0.5
    // })

    //set state form2
    this.setState((prevState) => {
      return {
        stars: prevState.stars + 0.5,
      };
    });

    // this.setState((prevState) => ({
    //   stars: prevState.stars + 0.5,
    // }));
  };

  decreaseStars = () => {
    if (this.state.stars <= 0) return;
    this.setState((prevState) => {
      return {
        stars: prevState.stars - 0.5,
      };
    });
  };

  handleFav = () => {
    this.setState({
      fav: !this.state.fav,
    });
  };

  handleAddToCart = () => {
    this.setState({
      isInCart: !this.state.isInCart,
    });
  };

  render() {
    const { plot, price, rating, stars, fav, isInCart } = this.state;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              alt="Poster"
              src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
            />
          </div>
          <div className="right">
            <div className="title">{this.state.title}</div>
            <div className="plot">{plot}</div>
            <div className="price">{price}</div>
            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  className="str-btn"
                  alt="decrease"
                  src="https://cdn-icons-png.flaticon.com/128/56/56889.png"
                  onClick={this.decreaseStars}
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
                  onClick={this.addStars}
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
                onClick={this.handleFav}
              >
                {fav ? "Un-Favourite" : "Favourite"}
              </button>
              <button
                className={isInCart? "unfavourite-btn" : "cart-btn"}
                onClick={this.handleAddToCart}
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
