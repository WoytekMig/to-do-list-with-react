import { useEffect, useState } from "react";

const taskLocalStorageKey = "storageTasks";

export const useTask = () => {

    const [tasks, setTasks] = useState(
        (JSON.parse(localStorage.getItem(taskLocalStorageKey))) ?? []);

    useEffect(() => {
        localStorage.setItem(taskLocalStorageKey, JSON.stringify(tasks))
    }, [tasks]);

    const addNewTask = (newTaskContent) => {
        setTasks(tasks => [
            ...tasks,
            {
                id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
                content: newTaskContent,
                done: false,
            },
        ]);
    };

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task =>
            (task.id === id) ? { ...task, done: !task.done } : task
        ));
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true,
        })));
    };

    return {
        tasks, addNewTask, removeTask, toggleTaskDone, setAllDone
    }

};
