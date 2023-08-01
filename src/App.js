import { HashRouter, Switch, Route, NavLink } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage/index";
import AuthorPage from "./features/AuthorPage/AuthorPage";
import { Navigation, LinkButton } from "./styled";


export default () => (
    <HashRouter>
        <Navigation>
            <NavLink activeClassName="active" to="/Tasks">
                To-do List
            </NavLink>

            <NavLink activeClassName="active" to="/Author">
                About Author
            </NavLink>

        </Navigation>
        <Switch>
            <Route path="/Tasks">
                <TasksPage />
            </Route>
        </Switch>
        <Switch>
            <Route path="/Author">
                <AuthorPage />
            </Route>
        </Switch>

    </HashRouter>
);