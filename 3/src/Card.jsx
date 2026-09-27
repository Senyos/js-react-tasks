import React from 'react';

// BEGIN (write your solution here)
const Card = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                {props.title && <h4 className="card-title">{props.title}</h4> || <h4 className="card-title">title</h4>}
                {props.text && <p className="card-text">{props.text}</p> || <p className="card-text">text</p>}
            </div>
        </div>
    );
}

export default Card;
// END
