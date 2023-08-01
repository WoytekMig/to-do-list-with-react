/* import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons"; */
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";

function AuthorPage() {

  return (
    <Container>
      <Header title="About Author" />
      <Section title=" Wojciech Migdał "
       body={
        <>Few words about myself... ;)</> 
       }/>

    </Container>
  );
};

export default AuthorPage;
