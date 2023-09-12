import React, { Component } from 'react';
import Like from './common/like';
import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';

class MoviesTable extends Component {
    columns =[
        {path: 'title',label:'Title'},
        {path: 'genre.name',label:'genre'},
        {path: 'numberInStock',label:'Stock'},
        {path: 'dailyRentalRate',label:'Rate'},
        {key: 'like'},
        {key:'delete'},
        
    ];

    
    
    render() {
        const { movies,onDelete,onLike,sortColumns,onSort } = this.props;




        return (
            <table className="table">
                <TableHeader 
                    columns={this.columns}
                    sortColumns={sortColumns} 
                    onSort={onSort} 
                />
                <TableBody data={movies}/>
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