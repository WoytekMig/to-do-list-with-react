import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useTask } from "./useTask";

function App() {

  const { tasks, removeTask, toggleTaskDone,
          setAllDone, addNewTask, 
          hideDone, toggleHideDone } = useTask();

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
