import React from 'react';

// BEGIN (write your solution here)
const Progress = (props) => {
    return (
        <div className="progress">
            <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={props.percentage}
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label="progressbar"
                style={{width: `${props.percentage}%`}}
            ></div>
        </div>
    );
}

export default Progress;
// END
