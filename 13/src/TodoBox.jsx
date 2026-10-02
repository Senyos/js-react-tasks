import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

// BEGIN (write your solution here)
const TodoBox = () => {
    const [task,      setTask]      = React.useState("");
    const [items,     setItems]     = React.useState([]);

    const submit = async (e) => {
        e.preventDefault();

        setItems([...items, { itemTask: task, itemId: uniqueId()}]);
        setTask("");
    }

    const removeItem = async (idToRemove) => {
        setItems(
            items.filter( (item) => {
                if (item.itemId !== idToRemove) return {itemNum: item.itemNum, itemId: item.itemId};
            })
        );
    }

    return (
        <div>
            <div className="mb-3">
                <form className="d-flex" onSubmit={submit}>
                    <div className="me-3">
                        <input
                                type="text"
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                                required=""
                                className="form-control"
                                placeholder="I am going..."
                                />
                    </div>
                    <button type="submit" className="btn btn-primary">add</button>
                </form>
            </div>
            {[...items].reverse().map( (item) => {
                return (
                    <React.Fragment key={item.itemId}>
                        <Item task={item.itemTask} onRemove={() => removeItem(item.itemId)} />
                    </React.Fragment>
                );
            } )}
        </div>
    );
}

export default TodoBox;
// END
