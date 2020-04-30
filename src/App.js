import React from "react";
import "./App.css";
import MoviePage from "./page/movie-page";
import Description from "./components/description";
import { Route } from 'react-router-dom'
import Navbar from "./components/navbar";




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route path="/:id" component={Description} />
      <Route exact path="/" component={MoviePage} />
    </div>
  );
}

export default App;