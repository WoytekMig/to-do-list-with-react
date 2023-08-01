import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function TasksPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));
    return (
        <Container>
            <Header title="Task details" />
            <Section title={task ? task.content : "There's no such task..."}
                body={
                    <> <strong>Task finished:</strong> {task.done ? "Yes" : "No"} </>}
            />
        </Container>
    );
};

export default TasksPage;
