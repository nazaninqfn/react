import React, { Component } from 'react';
import Like from './common/like';

class MoviesTable extends Component {

    raiseSort =path =>{
        const sortColumn = {...this.props.sortColumn};
        if (sortColumn.path === path) 
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        else{
            sortColumn.path = path;
            sortColumn.order ='asc';
        }
        this.props.onSort(sortColumn);
    };
    
    render() {
        const { movies,onDelete,onLike } = this.props;




        return (
            <table className="table">
                <thead>
                    <tr>
                        <th onClick ={() => this.raiseSort("title")}>title</th>
                        <th onClick ={() => this.raiseSort("genre.name")}>gener</th>
                        <th onClick ={() => this.raiseSort("numberInStock")}>stock</th>
                        <th onClick ={() => this.raiseSort("dailyRentalRate")}>rate</th>
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
    
};
};

export default MoviesTable;