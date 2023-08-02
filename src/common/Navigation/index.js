import { LinkButton, NavStyled } from "./styled";
import { toTasks, toAuthor } from "../../routes";

const Navigation = () => (
    <NavStyled>
        <LinkButton to={toTasks()}>
            To-do List
        </LinkButton>
        <LinkButton to={toAuthor()}>
            About Author
        </LinkButton>
    </NavStyled>
);

export default Navigation;