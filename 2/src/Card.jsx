import React from 'react';

// BEGIN (write your solution here)
const getCard = (props) => {
    return (
        (props.title || props.text) && <div className="card">
            <div className="card-body">
                {props.title && <h4 className="card-title">{props.title}</h4>}
                {props.text && <p className="card-text">{props.text}</p>}
            </div>
        </div> || null
    );
}

export default getCard;
// END
