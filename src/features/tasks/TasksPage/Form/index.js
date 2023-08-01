import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {Button, StyledForm, Input} from "./styled";
import { addTask } from "../../tasksSlice";


const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() === "") {
            return;
        }

        dispatch(addTask({
            content: newTaskContent.trim(),
            done: false,
            id: nanoid(),
        }));

        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
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
        </StyledForm>
    )
};

export default Form;