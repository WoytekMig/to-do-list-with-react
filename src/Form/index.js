import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() === "") {
            return;
        }
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input type="text"
                placeholder="What you need to do?"
                value={newTaskContent}
                name="nameTheTask"
                className="form__input"

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