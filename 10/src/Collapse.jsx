import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
const Collapse = (props) => {

    const [expanded, setExpanded] = React.useState(props.opened === false ? false : true);

    const changeExpanded = () => {
        setExpanded(!expanded);
    }

    return (
        <div>
            <p>
                <a
                    onClick={changeExpanded}
                    className="btn btn-primary"
                    data-bs-toggle="collapse"
                    href="#"
                    role="button"
                    aria-expanded={`${expanded}`}
                    >Link with href
                </a>
            </p>
            <div className={`collapse${expanded ? " show" : ""}`}>
                <div className="card card-body">{props.text}</div>
            </div>
        </div>
    );
}

export default Collapse;
// END
