import { HashRouter, Switch, Route } from 'react-router-dom';
import TasksPage from "./features/tasks/TasksPage/index";
import TaskPage from './features/tasks/TaskPage';
import AuthorPage from "./features/AuthorPage/AuthorPage";
import { Navigation, LinkButton } from "./styled";

export default () => (
    <HashRouter>
        <Navigation>
            <LinkButton to="/Tasks">
                To-do List
            </LinkButton>
            <LinkButton to="/Author">
                About Author
            </LinkButton>
        </Navigation>

        <Switch>
            <Route path="/Tasks/:id">
                <TaskPage />
            </Route>
            <Route path="/Tasks">
                <TasksPage />
            </Route>
            <Route path="/Author">
                <AuthorPage />
            </Route>
        </Switch>
    </HashRouter>
);