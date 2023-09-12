import React from 'react';
import Like from './common/like';


const MoviesTable = (props) => {
    const { movies,onDelete,onLike } = props;




    return (
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
                                onClick={() => onLike(movie)}
                                liked={movie.liked}
                            />
                        </td>
                        <td>
                            <button
                                onClick={() => onDelete(movie)}
                                className="btn btn-danger btm-sm">delete
                            </button>
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>

    );
}

export default MoviesTable;