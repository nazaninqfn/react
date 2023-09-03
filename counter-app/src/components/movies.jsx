import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/like';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import PropTypes from 'prop-types';


class Movies extends Component {
    state = {
        movies: getMovies(),
        pageSize:4,
        currentPage:1,
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

    handlePageChange= page =>{
        this.setState({ currentPage: page });
    }


    render() {
        const { length: count } = this.state.movies;
        const { pageSize , currentPage, movies:allMovies } = this.state;

        if (count === 0) return <p>no movie in database.</p>

        const movies = paginate( allMovies , currentPage, pageSize)

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
                        {movies.map(movie => (
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
                <Pagination
                    itemsCount="asd"
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
                />
            </React.Fragment>
        );
    }
}
Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};
export default Movies;