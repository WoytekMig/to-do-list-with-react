import { useSelector, useDispatch } from "react-redux";
import { Button, StyledButton } from "./styled";
import { selectTasks, toggleHideDone } from "../tasksSlice";

const Buttons = ({ setAllDone }) => {
    const {tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();
return (
    <StyledButton>
    {tasks.length > 0 && (
        <>
            <Button
                onClick={() => dispatch(toggleHideDone())}
            >
                {hideDone ? "Show" : "Hide"} finished
            </Button>
            <Button
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done)}>
                Finish all
            </Button>
        </>
    )}
</StyledButton>
)
};

export default Buttons;