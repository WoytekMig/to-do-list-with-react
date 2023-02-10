import React from "react";
import "./sectionButtons.css";

const Buttons = ({ tasks, hideDoneTask }) => (
    <div className="section section__subDiv">
        {tasks.length > 0 && (
            <React.Fragment>
                <button className="section__button js-toggleShowing">
                    {hideDoneTask ? "Show" : "Hide"} finished
                </button>
                <button className="section__button"
                    disabled={tasks.every(({ done }) => done)}>
                    Finish all
                </button>
            </React.Fragment>
        )}
    </div>
);

export default Buttons;