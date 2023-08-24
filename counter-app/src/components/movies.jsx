import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
class Movies extends Component {
    state = { 
        movies: getMovies(),
    } ;
    render() { 
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>title</th>
                        <th>gener</th>
                        <th>stock</th>
                        <th>rate</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(movie =>(
                        <tr>
                        <td>{movie.title}</td>
                        <td>{movie.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        );
    }
}

export default Movies;