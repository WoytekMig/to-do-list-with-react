import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDone }) => (
    <ul className="task__list">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`task__element ${task.done && hideDone ? "task__hide" : ""}"`}>
                <button className="button button__done">
                    {task.done ? "✔" : ""}
                </button>
                <article className={`${task.done ? " task__taskDone " : ""}  task`}>
                    {task.content}
                </article>
                <button className="button button__remove ">
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;