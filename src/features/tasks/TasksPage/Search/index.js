import { useLocation, useHistory } from "react-router-dom";
import Input from "../../Input"

export default () => {

    const location = useLocation();
    const history = useHistory();
    const query = (new URLSearchParams(location.search)).get("find");

    const onInputChange = ({target}) => {
        const searchParams = new URLSearchParams(location.search);

        if (target.value.trim() === " ") {
            searchParams.deleted("find");
        } else {
            searchParams.set("find", target.value);
        }
        history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    return (
       <Input
       placeholder="Filter tasks..."
       value={query || ""}
       onChange={onInputChange} />
    )
};