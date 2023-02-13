import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";


function App() {
  const [hideDone, setHideDone] = useState(false);
  const [task, setTasks] = useState(
    [
      { id: 1, content: "convert to react.js", done: false },
      { id: 2, content: "change language", done: true },
      { id: 3, content: "learn how to deploy", done: true },
    ]
  );

  const addNewTask = (newTaskContent) => {
    setTasks(tasks => [
      ...tasks,
      {
        id: task.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
        content: newTaskContent,
        done: false
      },
    ])
  }

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    }));
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  }

  return (
    <Container>
      <Header title="To-Do List" />
      <Section title="Add new task"
        body={
          <Form
            addNewTask={addNewTask}
          />} />

      <Section title="Task list"
        subDivContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />}
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />}
      />
    </Container>
  );
};

export default App;
