import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";


function App() {
  const [hideDone, setHideDone] = useState(false);
  const [task, setTasks] = useState (
    [
      { id: 1, content: "convert to react.js", done: false },
      { id: 2, content: "change language", done: true },
      { id: 3, content: "learn how to deploy", done: true },
    ]
  );

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };
const removeTask = (id) => {
  setTasks = ( tasks => tasks.filter(task => task.id !== id))
};

  return (
    <Container>
      <Header title="To-Do List" />
      <Section title="Add new task"
        body={<Form />} />

      <Section title="Task list"
        subDivContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
          />}
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
          />}
      />
    </Container>
  );
};

export default App;
