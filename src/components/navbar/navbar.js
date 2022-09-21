import React from "react";
import "./navbar.css";
// import HomeIcon from "@mui/material/Icon";
// import Icon from "@mui/material/Icon";
import NavLink from "../link/link";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
      x: 30,
      navelements: [
        { data: "/", content: "Home" },
        { data: "/movies", content: "Movies" },
        { data: "/tvs", content: "Tvs" },
        { data: "/products", content: "Products" },
        // { data: "#about", content: "About" },
      ],
    };
    // console.log("hello from constructor");
  }

  // componentDidMount() {
  //   //lifecycle Hook
  //   console.log("hello from didMount");
  // }

  // componentDidUpdate() {
  //   console.log("hello from didupdate");
  // }
  // componentWillUnmount() {
  //   //clean up
  // }

  handelIncrement = () => {
    this.setState({ counter: ++this.state.counter }); //object destructure
    console.log(this.state.counter);
  };
  render() {
    console.log("hello from render");
    return (
      <>
        {/* <HomeIcon color="success" /> */}
        {/* <Icon>star</Icon>; */}
        <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            {/* <HomeIcon color="success" /> */}
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {this.state.navelements.map((item) => (
                <NavLink data={item.data} content={item.content} />
              ))}
              {/* <Link data="#home" content="Home" />
              <Link data="#news" content="News" />
              <Link data="#Contact" content="Contact" />
              <Link data="#About" content="About" /> */}
            </ul>
          </div>
        </nav>
        </div>
        {/* <h2>{this.state.counter}</h2>
        <p>{this.state.x}</p>
        <button onClick={this.handelIncrement}>increment Counter</button>
        <ul>
          <Link data='#home'  content="Home" />
          <Link data='#news'  content="News"/>
          <Link data='#Contact'  content="Contact" />
          <Link data='#About'  content="About"/> 
          */}
        {/* <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li> */}
        {/* </ul> */}
      </>
    );
  }
}
export default Navbar;
