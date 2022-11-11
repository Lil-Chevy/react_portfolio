import React, { useState } from "react";

import photo from "../../assets/small/portfolio/photo.png";
import photo0 from "../../assets/small/portfolio/0.png";
import photo1 from "../../assets/small/portfolio/1.png";
import photo2 from "../../assets/small/portfolio/2.png";
import photo3 from "../../assets/small/portfolio/3.png";
import photo4 from "../../assets/small/portfolio/4.png";
import photo5 from "../../assets/small/portfolio/5.png";

function PortfolioList() {
  const [photos] = useState([
    {
      name: "Grocery aisle",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Grocery booth",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Building exterior",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Restaurant table",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Cafe interior",
      category: "portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Cat green eyes",
      category: "portraits",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
  ]);
  return (
    <div className="portfolio">
      <section className="portfolio-card">
        <a href="https://site-seers.herokuapp.com/">
          <img src={photo} alt="Site Seers" className="img-thumbnail" />
          <p className="img-thumbnail-desc">Site Seers</p>
        </a>
      </section>
      <section className="portfolio-card">
        <a href="https://lernantino.github.io/run-buddy/">
          <img src={photo0} alt="Run Buddy Website" className="img-thumbnail" />
          Run Buddy
        </a>
      </section>
      <section className="portfolio-card">
        <a href="https://quiet-atoll-98867.herokuapp.com/">
          <img
            src={photo1}
            alt="Personal Note Taker"
            className="img-thumbnail"
          />
          Personal Note Taker
        </a>
      </section>
      <section className="portfolio-card">
        <a href="https://github.com/Lil-Chevy/generate_my_readme">
          <img src={photo2} alt="Read Me generator" className="img-thumbnail" />
          ReadMe.md Generator
        </a>
      </section>
      <section className="portfolio-card">
        <a href="https://lil-chevy.github.io/My_Work_Day_scheduler/">
          <img
            src={photo3}
            alt="Work Day Scheduler App"
            className="img-thumbnail"
          />
          Work Day Scheduler
        </a>
      </section>
      <section className="portfolio-card">
        <a href="https://github.com/Lil-Chevy/robot-gladiators">
          <img src={photo4} alt="Robot Gladiators" className="img-thumbnail" />
          Robot Gladiators
        </a>
      </section>
      <section className="portfolio-card">
        <a href="https://limitless-lowlands-09863.herokuapp.com/">
          <img src={photo5} alt="Bug Bash!" className="img-thumbnail" />
          Bug Bash
        </a>
      </section>
    </div>
  );
}

export default PortfolioList;

// must add section for media sizes to come up with a mobile first design which should allow for the cards to display in the way we need
