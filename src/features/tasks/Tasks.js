import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTask } from "../../useTask";

function Tasks() {

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
          <TaskList
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />}
      />
    </Container>
  );
};

export default Tasks;
