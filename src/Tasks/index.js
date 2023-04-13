import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDone, toggleTaskDone, removeTask }) => (
    <ul className="task__list">
        {tasks.map(task => (
            <li
                className={`task__element ${hideDone && task.done ? "task__hide" : ""}`}
                key={task.id}>
                <button onClick={() => toggleTaskDone(task.id)} className="button button__done">
                    {task.done ? "✔" : ""}
                </button>
                <article className={`${task.done ? " task__taskDone " : ""}  task`}>
                    {task.content}
                </article>
                <button onClick={() => removeTask(task.id)} className="button button__remove ">
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;