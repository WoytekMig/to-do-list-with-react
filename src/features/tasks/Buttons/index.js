import React from "react";
import { Button, StyledButton } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <StyledButton>
        {tasks.length > 0 && (
            <>
                <Button
                    onClick={toggleHideDone}
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
);

export default Buttons;