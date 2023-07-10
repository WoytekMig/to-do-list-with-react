import { useSelector, useDispatch } from "react-redux";
import { Button, StyledButton } from "./styled";
import { selectTasks, selectAreTasksEmpty, toggleHideDone, setAllDone } from "../tasksSlice";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const dispatch = useDispatch();
    return (
        <StyledButton>
            {!areTasksEmpty && (
                <>
                    <Button
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Show" : "Hide"} finished
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={tasks.every(({ done }) => done)}>
                        Finish all
                    </Button>
                </>
            )}
        </StyledButton>
    )
};

export default Buttons;