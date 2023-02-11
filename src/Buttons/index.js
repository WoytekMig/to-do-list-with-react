import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTask }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button className="buttons__layout js-toggleShowing">
                    {hideDoneTask ? "Show" : "Hide"} finished
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