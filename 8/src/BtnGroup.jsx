import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
const BtnGroup = () => {
    const [activeLeft, setActiveLeft] = React.useState(0);
    const [activeRight, setActiveRight] = React.useState(0);

    const activateLeft = () => {
        setActiveRight("");
        setActiveLeft(" active");
    }

    const activateRight = () => {
        setActiveLeft("");
        setActiveRight(" active");
    }

    return (
        <div className="btn-group" role="group">
            <button onClick={activateLeft} type="button" className={`btn btn-secondary left${activeLeft}`}>Left</button>
            <button onClick={activateRight} type="button" className={`btn btn-secondary right${activeRight}`}>Right</button>
        </div>
    );
}

export default BtnGroup;
// END
