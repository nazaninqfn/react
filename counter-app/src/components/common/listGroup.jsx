import React from 'react';

const ListGroup = props => {
    const {
        items,
        textProperty, 
        valueProperty, 
        onItemSelect, 
        selectedItem 
    } = props;
    
    return (
        <ul className="list-group">
            {items.map(item => (
                <li onClick={() => onItemSelect(item)}
                    key={item[valueProperty]}
                    className={item === selectedItem ? "List-group-item active" : "List-group-item"}
                >
                    {item[textProperty]}
                </li>
            ))}
        </ul>
    );
};

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
}

export default ListGroup;
