import { BrowserRouter, Switch, Route } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/Author/Author";
import { Navigation, LinkButton } from "./styled";


export default () => (
    <BrowserRouter>
        <Navigation>
            <LinkButton to="/Tasks">
                To-do List
            </LinkButton>

            <LinkButton to="/Author">
                About Author
            </LinkButton>

        </Navigation>
        <Switch>
            <Route path="/Tasks">
                <Tasks />
            </Route>
        </Switch>
        <Switch>
            <Route path="/Author">
                <Author />
            </Route>
        </Switch>

    </BrowserRouter>
);