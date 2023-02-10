import React from "react";
import "./section.css";

const Section = ({ title, subDivContent, body }) => (
    <section className="section__main">
        <header className="section section__header">
            <h2 className="section__secondHeader"> {title} </h2>
            {subDivContent}
        </header>
        <div className="section__container">
            {body}
        </div>
    </section>
);

export default Section;