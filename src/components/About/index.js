import React from "react";
import coverImage from "../../assets/cover/me.png";
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
      <div className="my-2">
        <p>
          Hello, and welcome to my Portfolio! I have made this page to display
          some of my capabilities as a Full Stack Developer. Please feel free to
          checkout some of the links below or contact me for possible future
          employment. Enjoy yourself and have a wonderful day!
        </p>
      </div>
    </section>
  );
}

export default About;
