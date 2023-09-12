import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import ListGroup from './common/listGroup';
import Like from './common/like';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';


class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
    };

    componentDidMount() {
        const genres = [{ name: 'All Genres'}, ...getGenres()]
        this.setState({ movies: getMovies(), genres});
        
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

    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre });
    };


    render() {
        const { length: count } = this.state.movies;
        const { 
            pageSize, 
            currentPage, 
            selectedGenre, 
            movies: allMovies 
        } = this.state;

        if (count === 0) return <p>no movie in database.</p>


        const filtered = selectedGenre 
            ? allMovies.filter(m => m.genre._id === selectedGenre._id)
            : allMovies;
        
        //we're filtering the list of movies, we're checking to 
        //see if selected genre is truth. If it's truthy, we're filtering 
        //the movies, so we get each movie and we make sure that the id 
        //of the genre of that movie equals the id of the selected genre


        const movies = paginate(filtered, currentPage, pageSize)


        return (
            <div className='row'>
                <div className="col-3">
                    <ListGroup
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    <p>showing {filtered.length} movies in database.</p>
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
                                    <td>{movie.genre.name}</td>
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
                        itemsCount={filtered.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>
            </div>
        );
    }
}

export default Movies;