import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";

function AuthorPage() {

  return (
    <Container>
      <Header title="About Author" />
      <Section title=" Wojtek Migdał "
        body={
          <>Hey ! My name is Wojtek, and I'm 34 &#128512;
            In this, let's just say 'interesting time for IT', I'm giving myself a chance &#128516;
            <p>In my free time, I love to play:</p> <ul>1. with my kids&#129490;,</ul> <ul>2. footbal&#9917;</ul> 
            <ul>3. some old RPGs..&#128050;</ul> 
           <ul><i>(in that order!&#128518; )</i> </ul>
            <p>When I have an oportunity to see <strong>Arsenal</strong> match - 
            well... I'm not turning my eyes off &#128514; </p>
            <p>I'm a great &#127925; <strong>Bon Jovi</strong> &#127925; fan too..
              They have great music for my every kind of mood..  </p>
              <p>Just love them! &#129505;</p>
          </>
        } />
    </Container>
  );
};

export default AuthorPage;
