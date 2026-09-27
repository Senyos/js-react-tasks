import React from 'react';

// BEGIN (write your solution here)
const ListGroup = ({children}) => {
    return (
        (children.length !== 0) && <ul className="list-group">
        {children.map( (child, i) => {
            return (
                <li className="list-group-item" key={i}>{child}</li>
            );
        } )}
        </ul> || null

    );
}

export default ListGroup;
// END
