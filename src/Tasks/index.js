import React from "react";
import { List, Item, Content, ToggleDoneButton, RemoveButton } from "./styled";

const Tasks = ({ tasks, hideDone, toggleTaskDone, removeTask }) => (
    <List>
        {tasks.map(task => (
            <Item
                hidden={hideDone && task.done}
                key={task.id}>
                <ToggleDoneButton
                    onClick={() => toggleTaskDone(task.id)}>
                    {task.done ? "✔" : ""}
                </ToggleDoneButton>
                <Content
                    done={task.done}>
                    {task.content}
                </Content>
                <RemoveButton
                    onClick={() => removeTask(task.id)}>
                    🗑
                </RemoveButton>
            </Item>
        ))}
    </List>
);

export default Tasks;