import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import React from 'react';

// BEGIN (write your solution here)
const Component = () => {

    const [num, setNum] = React.useState(0);
    const [buttons, setButtons] = React.useState([]);

    const numSetter = (newNum) => {
        return new Promise(() => {
            setNum(newNum);
        })
    }

    const buttonsSetter = (newButtons) => {
        return new Promise(() => {
            setButtons(newButtons);
        })
    }

    const itemRemover = (idToRemove) => {
        return new Promise(() => {
            setButtons(
                buttons.filter( (item) => {
                    if (item.itemId !== idToRemove) return {itemNum: item.itemNum, itemId: item.itemId};
                })
            );
        })
    }

    const plusButton = async () => {
        const lastItem = [...buttons].reverse()[0];
        const lastNum = lastItem ? lastItem["itemNum"] : 0;
        await buttonsSetter([...buttons, { itemNum: lastNum + 1, itemId: uniqueId()} ]);
    }

    const minusButton = async () => {
        const lastItem = [...buttons].reverse()[0];
        const lastNum = lastItem ? lastItem["itemNum"] : 0;
        await buttonsSetter([...buttons, { itemNum: lastNum - 1, itemId: uniqueId()} ]);
    }

    const removeItem = async (idToRemove) => {
        await itemRemover(idToRemove);
    }

    return (
        <div>
            <div className="btn-group font-monospace" role="group">
                <button type="button" className="btn btn-outline-success" onClick={plusButton} >+</button>
                <button type="button" className="btn btn-outline-danger" onClick={minusButton} >-</button>
            </div>
            {buttons.length > 0 && <div className="list-group">
                {[...buttons].reverse().map( (item) => {
                    return (
                        <React.Fragment key={item.itemId}>
                            <button type="button" className="list-group-item list-group-item-action" onClick={() => removeItem(item.itemId)}>
                                {item.itemNum}
                            </button>
                        </React.Fragment>
                    );
                } )}
            </div> || null}
        </div>
    );
}

export default Component;
// END
