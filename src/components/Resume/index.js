import React from "react";
import resumePhoto from "../../assets/resumePalceholder/Resume.png";

function Resume() {
  return (
    <section href="#resume" id="resume">
      <h1 data-testid="h1tag"> Resume</h1>
      <p>Please feel free to Click the image below to download my resume!</p>
      <p></p>

      <a href="https://docs.google.com/document/d/1lf3HtMdGyTpgFY5sROVyOkrCoFf7GRe2zOa-bOHmhyk/edit?usp=sharing">
        <img src={resumePhoto} alt="My Resume" />
      </a>
    </section>
  );
}

export default Resume;
