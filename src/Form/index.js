import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent === "") {
            return;
        }
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");

    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input type="text"
                name="nameTheTask"
                className="form__input"
                placeholder="What you need to do?"
                onChange={({ target }) => setNewTaskContent(target.value)}
                autofocus
            />
            <button className="form__button">
                Add task
            </button>
        </form>
    )
};

export default Form;