import { useSelector, useDispatch } from "react-redux";
import { StyledButton } from "./styled";
import { TransparentButton } from "../styled";
import {
    selectTasksState,
    selectAreTasksEmpty,
    toggleHideDone,
    setAllDone,
} from "../tasksSlice";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasksState);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const dispatch = useDispatch();
    return (
        <StyledButton>
            {!areTasksEmpty && (
                <>
                    <TransparentButton
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Show" : "Hide"} finished
                    </TransparentButton>
                    <TransparentButton
                        onClick={() => dispatch(setAllDone())}
                        disabled={tasks.every(({ done }) => done)}>
                        Finish all
                    </TransparentButton>
                </>
            )}
        </StyledButton>
    )
};

export default Buttons;