import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";

function AuthorPage() {

  return (
    <Container>
      <Header title="About Author" />
      <Section title=" Wojtek Migdał "
        body={
          <>Hey ! My name is Wojtek, and I'm 34 ;) In this, let's just say 'interesting times for IT', I'm giving myself a chance :D
            In my free time, I love to play: 1. with my kids, 2. footbal 3. some old RPGs.. (in that order!:D )
            <p>When I have an oportunity to see <strong>Arsenal</strong> match - well... I'm not turning my eyes off :P</p>
            <p>I'm a great <strong>Bon Jovi</strong> fan too.. They have great music for my every kind of mood.. Love them! <strong> : )</strong> </p>
          </>
        } />
    </Container>
  );
};

export default AuthorPage;
