import React, { useEffect, useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useTask } from "./useTask";

const hideDoneLocalStorageKey = "hideDoneStatus";

function App() {
  const [hideDone, setHideDone] = useState(
    (JSON.parse(localStorage.getItem(hideDoneLocalStorageKey))) ?? false);

  const { tasks, removeTask, toggleTaskDone, setAllDone, addNewTask } = useTask();

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  useEffect(() => localStorage.setItem(hideDoneLocalStorageKey, JSON.stringify(hideDone)));

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
