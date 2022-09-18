import "./App.css";
// import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Navbar from "./components/navbar/navbar";
import Movies from "./components/movies/movies";
import Tv from "./components/tv/tv";

function App() {
  var title = "Movies";

  return (
    <>
      <Navbar />
      <div className="container">
        <Carousel className="Carousel">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-vector/cinematograph-concept-background-design-with-popcorn-3d-glasses_260559-142.jpg?w=2000"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://st3.depositphotos.com/1064045/15061/i/600/depositphotos_150614902-stock-photo-unusual-cinema-concept-3d-illustration.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://t4.ftcdn.net/jpg/02/86/32/13/360_F_286321335_NBvhp1nTWr6z6EQMVVWqHWWZvNmzFfqS.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

        {/* <div class="jumbotron">
          <div class="container">
            <h1 class="display-4">MoviesApp</h1>
            <p class="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
            <Button variant="success">Success</Button>{' '}
          </div>
        </div> */}

        {/* <Movies /> */}
        <Tv/>
      </div>
    </>
  );
}

export default App;
