import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { TransparentButton } from "./styled";
import { fetchExampleTasks } from "./tasksSlice";
import { useDispatch } from "react-redux";



function Tasks() {

  const dispatch = useDispatch();

  return (
    <Container>
      <Header title="To-Do List" />
      <Section title="Add new task"
        subDivContent={
          <TransparentButton onClick={() => dispatch(fetchExampleTasks())}>
            Load the example tasks
          </TransparentButton>}
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
