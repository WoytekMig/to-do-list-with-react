import React from "react";
import { ButtonLayout, ButtonsDiv } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <ButtonsDiv>
        {tasks.length > 0 && (
            <>
                <ButtonLayout
                    onClick={toggleHideDone}
                >
                    {hideDone ? "Show" : "Hide"} finished
                </ButtonLayout>
                <ButtonLayout
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}>
                    Finish all
                </ButtonLayout>
            </>
        )}
    </ButtonsDiv>
);

export default Buttons;