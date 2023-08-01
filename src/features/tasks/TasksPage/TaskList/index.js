import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { List, Item, Content, ToggleDoneButton, RemoveButton } from "./styled";
import { toggleTaskDone, removeTask, selectTasksState } from "../../tasksSlice";


const TaskList = () => {
    const { tasks, hideDone } = useSelector(selectTasksState);
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
                     <Link to={`/Tasks/${task.id}`}>{task.content}</Link> 
                    </Content>
                    <RemoveButton
                        onClick={() => dispatch(removeTask(task.id))}>
                        🗑
                    </RemoveButton>
                </Item>
            ))}
        </List>
    );
};

export default TaskList;