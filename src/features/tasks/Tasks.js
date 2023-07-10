import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";

function Tasks() {

  return (
    <Container>
      <Header title="To-Do List" />
      <Section title="Add new task"
        body={
          <Form />}
      />
      <Section title="Task list"
        subDivContent={
          <Buttons />}
        body={
          <TaskList />}
      />
    </Container>
  );
};

export default Tasks;
