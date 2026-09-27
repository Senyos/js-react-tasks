import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
const Alert = (props) => {
    return (
        <div className={`alert alert-${props.type}`} role="alert">
            {props.text}
        </div>
    );
}

export default Alert;
// END
