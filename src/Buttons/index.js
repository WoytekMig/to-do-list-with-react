import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button onClick={toggleHideDone} className="buttons__layout js-toggleShowing">
                    {hideDone ? "Show" : "Hide"} finished
                </button>
                <button className="buttons__layout"
                    disabled={tasks.every(({ done }) => done)}>
                    Finish all
                </button>
            </>
        )}
    </div>
);

export default Buttons;