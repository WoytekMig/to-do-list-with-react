import { useSelector, useDispatch } from "react-redux";
import { Button, StyledButton } from "./styled";
import {
    selectTasksState,
    selectAreTasksEmpty,
    toggleHideDone,
    setAllDone,
    fetchExampleTasks
} from "../tasksSlice";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasksState);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const dispatch = useDispatch();
    return (
        <StyledButton>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Load the example tasks
            </Button>
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