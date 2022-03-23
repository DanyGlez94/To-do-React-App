import React from 'react';
import { FiCheckSquare } from 'react-icons/fi'
import { RiCloseCircleFill } from 'react-icons/ri'
import './TodoItem.css';

const TodoItem = (props) => {
    
    return (
        <li className='TodoItem'>
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
                <FiCheckSquare />
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>{props.text}</p>
            <span 
                className='Icon Icon-delete'
                onClick={props.onDelete}
            >
                <RiCloseCircleFill />
            </span>
        </li>
    );
}

export { TodoItem };