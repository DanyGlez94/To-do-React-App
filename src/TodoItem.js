import React from 'react';
import './TodoItem.css';

const TodoItem = (props) => {

    const onComplete = () => {
        alert('Ya completaste el To-do ' + props.text);
    };

    const onDelete = () => {
        alert('Borraste el To-do ' + props.text);
    };

    return (
        <li className='TodoItem'>
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={onComplete}
            >
                ✅
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>{props.text}</p>
            <span 
                className='Icon Icon-delete'
                onClick={onDelete}
            >
                X
            </span>
        </li>
    );
}

export { TodoItem };