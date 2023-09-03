import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import ListGroup from './common/listGroup';
import Like from './common/like';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import PropTypes from 'prop-types';


class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
    };

    commponentDidMount() {
        this.setState({ movies: getMovies(), geners: getGenres() });
    };

    handleDelete = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    };

    handleLike = (movie) => {
        console.log('like');
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    }

    handleGenreSelect = gener => {
        console.log(genre);
    };


    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage, movies: allMovies } = this.state;

        if (count === 0) return <p>no movie in database.</p>

        const movies = paginate(allMovies, currentPage, pageSize)

        return (
            <div className='row'>
                <div className="col-2">
                    <ListGroup
                        items={this.state.genres}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
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
                                            onClick={() => this.handleLike(movie)}
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
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>
            </div>
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