import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

// Render : componentWillMount() -> render() -> componentDidMount()

// Update : componentWillReceiveProps() -> shouldComponentUpdate() == true -> componentWillUpdate() -> render() -> componentDidUpdate() 

class App extends Component {
  state = {
    loading : "loading...",
    
  }

  componentWillMount() {
    console.log("will mount");
    
  }

  componentDidMount() {
    console.log("did mount");
    fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
    .then(response => {return response.json()})
    .then(json => {
      console.log(json);
      this.setState({
        movies : json.data.movies
      })
    })
    .catch(err => console.log(err))

    // setTimeout(()=> {
      
    // },1000);
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.medium_cover_image} key={index}/>
    })
    return movies;
  }

  render() {
    console.log("render!");
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : this.state.loading}
      </div>
    );
  }
}

export default App;
