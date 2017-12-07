import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {

    static propTypes = {
        title : PropTypes.string.isRequired,
        poster : PropTypes.string.isRequired
    }

    render() {
        return (
        <div className="Movie">
            <MoviePoster poster={this.props.poster} />
            <p>{this.props.title}</p>
        </div>
        );
    }
}


// stateless functional component
// : It needs only simple return value. No need something like componentWillMount, updateProps etc. 
// There is no render() function and lifecycle methods.
function MoviePoster({poster}) {
    return (
        <img src={poster} alt="Movie Poster" />
    )
}

MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired
}

export default Movie;
