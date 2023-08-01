import { SectionElement, SectionHeader, SubHeader, Container } from "./styled";

const Section = ({ title, subDivContent, body }) => (
    <SectionElement>
        <SectionHeader>
            <SubHeader>{title}</SubHeader>
            {subDivContent}
        </SectionHeader>
        <Container>
            {body}
        </Container>
    </SectionElement>
);

export default Section;