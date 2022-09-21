import React from "react";
import "./movies.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";

class Movies extends React.Component {
  constructor() {
    super();
    this.apiKey = "790392d65f15e65ab054f72d158f72c2";
    this.state = {
      moviesList: [],
      users: [
        { id: 1, name: "ali" },
        { id: 2, name: "hosam" },
        { id: 3, name: "ramy" },
      ],
      isausenticate: false,
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=790392d65f15e65ab054f72d158f72c2&language=en-US&page=6"
      )
      .then((moviesData) => {
        console.log(moviesData.data.results);
        this.setState({moviesList:moviesData.data.results})
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        {/* {this.state.isausenticate &&
          this.state.users.map((user) => (
            <div>
              <h1>{user.name}</h1>
            </div>
          ))} */}
        {this.state.isausenticate ? (
          this.state.users.map((user) => (
            <div>
              <h1>{user.name}</h1>
            </div>
          ))
        ) : (
          <div className="container">
            <div className="row">
              {this.state.moviesList.map((movie) => (
                <div
                  className="card col-3"
                  // style={{ width: 300, marginLeft: 10, marginBottom: 10 }}
                >
                  <img
                    class="card-img-top"
                    src={
                      "https://image.tmdb.org/t/p/original" + movie.poster_path
                    }
                    alt="Card image"
                  />
                  <div class="card-body">
                    <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    {/* <h4 class="card-title">{movie.title}</h4>
                    </Link> */}
                    <p class="card-text">Some example text.</p>
                    <a href="#" class="btn btn-primary">
                      See Profile
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* (<div>
        <h1>{this.state.users[0].name}</h1>
    </div>)
    <div>
        <h1>{this.state.users[1].name}</h1>
    </div>
    <div>
        <h1>{this.state.users[2].name}</h1>
    </div> */}
      </>
    );
  }
}

export default Movies;
