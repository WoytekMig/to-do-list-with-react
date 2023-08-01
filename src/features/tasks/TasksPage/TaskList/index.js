import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { List, Item, Content, ToggleDoneButton, RemoveButton } from "./styled";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";


const TaskList = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get("Find"); 

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone); 
    
    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map((task) => (
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