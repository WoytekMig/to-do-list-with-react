import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, ToggleDoneButton, RemoveButton } from "./styled";
import { selectTasks, toggleTaskDone } from "../tasksSlice";

const TaskList = ({ removeTask }) => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();
    
    return (
        <List>
            {tasks.map(task => (
                <Item
                    hidden={hideDone && task.done}
                    key={task.id}>
                    <ToggleDoneButton
                        onClick={() => dispatch(toggleTaskDone(task.id))}>
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
};

export default TaskList;