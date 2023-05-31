import React from "react";
import { List, Item, Content, Button } from "./styled";

const Tasks = ({ tasks, hideDone, toggleTaskDone, removeTask }) => (
    <List>
        {tasks.map(task => (
            <Item
                hidden={hideDone && task.done}
                key={task.id}>
                <Button onClick={() => toggleTaskDone(task.id)}
                    done>
                    {task.done ? "✔" : ""}
                </Button>
                <Content
                    done={task.done}>
                    {task.content}
                </Content>
                <Button onClick={() => removeTask(task.id)}
                    remove>
                    🗑
                </Button>
            </Item>
        ))}
    </List>
);

export default Tasks;