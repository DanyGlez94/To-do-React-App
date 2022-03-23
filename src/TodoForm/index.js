import React, { useState, useContext } from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = useState('');

    const {
        addTodo,
        setOpenModal,
    } = useContext(TodoContext)

    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (e) => {
        e.preventDefault(); //Evita que recarge la página.
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TO-DO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla para el almuerzo"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    className="TodoForm-button TodoForm-button-cancel"
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className="TodoForm-button TodoForm-button-add"
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm };