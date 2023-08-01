import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { TransparentButton } from "../styled";
import { fetchExampleTasks } from "../tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectAreTaskLoading } from "../tasksSlice";

function TasksPage() {
  const loading = useSelector(selectAreTaskLoading);
  const dispatch = useDispatch();

  return (
    <Container>
      <Header title="To-Do List" />
      <Section title="Add new task"
        subDivContent={
          <TransparentButton
            onClick={() => dispatch(fetchExampleTasks())}
            disabled={loading}  >
            {loading ? "Loading..." : "Load the example tasks"}
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

export default TasksPage;
