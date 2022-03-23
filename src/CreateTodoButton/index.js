import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';

const CreateTodoButton = () => {
    const { openModal, setOpenModal } = useContext(TodoContext)
    const onClickButton = () => {
        // openModal ? setOpenModal(false) : setOpenModal(true); //Condicional ternario.
        setOpenModal(!openModal) //Este hace lo mismo que el de arriba, pero más compacto.
    };

    return (
        <button 
            className='CreateTodoButton'
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export { CreateTodoButton };