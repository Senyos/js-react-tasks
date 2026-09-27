import React from 'react';

// BEGIN (write your solution here)
const DefinitionsList = ({data}) => {
    return (
        (data.length !== 0) && <dl>
            {data.map( (dl) => {
                return (
                    <React.Fragment key={dl.id}>
                        <dt>{dl.dt}</dt>
                        <dd>{dl.dd}</dd>
                    </React.Fragment>
                );
            } )}
        </dl> || null
    );
}

export default DefinitionsList;
// END
