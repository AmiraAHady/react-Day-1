
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Home(props) {

  let history=useHistory()
  // console.log(props);
let goToMovies=()=>{
     history.push('/movies')
    //  props.history.push('/movies')
     
}

  return (
  <>
  <h1>home component</h1>
  
  <button className="btn btn-primary" onClick={goToMovies}>go to movies</button>
  <button className="btn btn-primary">go to Tv</button>
  </>
  );
}
