import React from "react";
import "./style.css";

const Section = ({ title, subDivContent, body }) => (
    <section className="section">
        <header className="section__header">
            <h2 className="section__secondHeader">{title}</h2>
            {subDivContent}
        </header>
        <div className="section__container">
            {body}
        </div>
    </section>
);

export default Section;