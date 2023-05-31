import React, { useState, useRef } from "react";
import {Button, FormStyle, Input} from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() === "") {
            return;
        }
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <FormStyle onSubmit={onFormSubmit}>
            <Input type="text"
                placeholder="What you need to do?"
                value={newTaskContent}
                name="nameTheTask"
                autoFocus
                onChange={({ target }) => setNewTaskContent(target.value)}
                ref={inputRef}
            />
            <Button>
                Add task
            </Button>
        </FormStyle>
    )
};

export default Form;