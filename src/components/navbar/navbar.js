import React from "react";
import "./navbar.css"
import Link from "../link/link";
class Navbar extends React.Component {
  constructor() {
    super()
    this.state={
      counter:1,
      x:30
    }
    console.log('hello from constructor')
  }

  componentDidMount(){//lifecycle Hook
    console.log('hello from didMount');
  }

  componentDidUpdate(){
    console.log('hello from didupdate');
  }
  componentWillUnmount(){
    //clean up
  }

  handelIncrement=()=>{
    this.setState({counter:++this.state.counter})//object destructure
    console.log(this.state.counter)
  }
  render() {
    console.log('hello from render')
    return (
      <>

        <h2>{this.state.counter}</h2>
        <p>{this.state.x}</p>
        <button onClick={this.handelIncrement}>increment Counter</button>
        <ul>
          <Link data='#home'  content="Home" />
          <Link data='#news'  content="News"/>
          <Link data='#Contact'  content="Contact" />
          <Link data='#About'  content="About"/>
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
        </ul>
      </>
    );
  }
}
export default Navbar;