import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";



const tasks = [
  { id: 1, content: "convert to react.js", done: false },
  { id: 2, content: "change language", done: true },
  { id: 3, content: "learn how to deploy", done: true },
];

const hideDoneTask = false;

function App() {
  return (
    <Container>
      <Header title="To-Do List" />
      <Section title="Add new task"
        body={<Form />} />

      <Section title="Task list"
        subDivContent={<Buttons tasks={tasks} hideDoneTask={hideDoneTask} />}
        body={<Tasks tasks={tasks} hideDoneTask={hideDoneTask} />} />
    </Container>
  );
};

export default App;
