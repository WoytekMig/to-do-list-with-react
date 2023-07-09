import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTask } from "../../useTask";


function Tasks() {

  const { removeTask, setAllDone } = useTask();

  return (
    <Container>
      <Header title="To-Do List" />
      <Section title="Add new task"
        body={
          <Form />} />

      <Section title="Task list"
        subDivContent={
          <Buttons
            setAllDone={setAllDone}
          />}
        body={
          <TaskList
            removeTask={removeTask}
          />}
      />
    </Container>
  );
};

export default Tasks;
