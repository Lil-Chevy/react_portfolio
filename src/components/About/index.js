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
          Hello, and welcome to my Resume page i built with React.js! I am
          excited to start my career in Front End Development. Please feel free
          to check my Resume and some of the project i have completed in my
          repository! Have an awesome day!
        </p>
      </div>
    </section>
  );
}

export default About;
