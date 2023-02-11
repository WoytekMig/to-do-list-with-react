import "./style.css";

const Form = () => (
    <form className="form">
        <input type="text"
            name="nameTheTask"
            className="form__input"
            placeholder="What you need to do?"
            autofocus />
        <button className="form__button">Add task</button>
    </form>
);

export default Form;