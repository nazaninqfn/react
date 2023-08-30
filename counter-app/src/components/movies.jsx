import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/like';
class Movies extends Component {
    state = {
        movies: getMovies(),
    };

    handleDelete = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    };

    handleLike = (movie) => {
        console.log('like');
    };


    render() {
        const { length: count } = this.state.movies;

        if (count === 0) return <p>no movie in database.</p>

        return (
            <React.Fragment>
                <p>showing {count} movies in database.</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>gener</th>
                            <th>stock</th>
                            <th>rate</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(movie => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <Like
                                        onClick={()=>this.handleLike(movie)}
                                        liked={movie.liked}
                                    />
                                </td>
                                <td>
                                    <button
                                        onClick={() => this.handleDelete(movie)}
                                        className="btn btn-danger btm-sm">delete
                                    </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Movies;