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
    this._getMovies();

    

    // setTimeout(()=> {
      
    // },1000);
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    console.log(movies);
    this.setState({
      movies : movies
    })
  }

  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie 
        title={movie.title} 
        poster={movie.medium_cover_image} 
        synopsis={movie.synopsis}
        genres = {movie.genres}
        key={movie.id}
    />
      
    })
    return movies;
  }

  render() {
    console.log("render!");
    return (
      <div className={this.state.movies? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies() : this.state.loading}
      </div>
    );
  }
}

export default App;
