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
        {
            key: 'like',
            content : movie => 
            <Like
            onClick={() => this.props.onLike(movie)}
            liked={movie.liked}
            />
        },
        {
            key:'delete',
            content : movie =>
            <button
                onClick={() => this.props.onDelete(movie)}
                className="btn btn-danger btm-sm">delete
            </button>
        
        },
        
    ];

    
    
    render() {
        const { movies,onDelete,onLike,sortColumn,onSort } = this.props;




        return (
            <table className="table">
                <TableHeader 
                    columns={this.columns}
                    sortColumn={sortColumn} 
                    onSort={onSort} 
                />
                <TableBody 
                    columns={this.columns} 
                    data={movies}
                />
                
            </table>

        );
    
};
};

export default MoviesTable;