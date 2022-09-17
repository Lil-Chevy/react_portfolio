import React, { useState } from "react";

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
    <div>
      <a href="https://lernantino.github.io/run-buddy/">
        <img src={photo0} alt="Run Buddy Website" />
        GitHub: https://github.com/Lil-Chevy/run-buddy
      </a>
      <a href="https://quiet-atoll-98867.herokuapp.com/">
        <img src={photo1} alt="Personal Note Taker" />
        GitHub: https://github.com/Lil-Chevy/personal_note_taker
      </a>
      <a href="https://github.com/Lil-Chevy/generate_my_readme">
        <img src={photo2} alt="Read Me generator" />
        GitHub: https://github.com/Lil-Chevy/generate_my_readme
      </a>
      <a href="https://lil-chevy.github.io/My_Work_Day_scheduler/">
        <img src={photo3} alt="Work Day Scheduler App" />
        GitHub: https://github.com/Lil-Chevy/My_Work_Day_scheduler
      </a>
      <a href="https://github.com/Lil-Chevy/robot-gladiators">
        <img src={photo4} alt="Robot Gladiators" />
        GitHub: https://github.com/Lil-Chevy/robot-gladiators
      </a>
      <a href="https://limitless-lowlands-09863.herokuapp.com/">
        <img src={photo5} alt="Bug Bash!" />
        GitHub: https://github.com/glo6al/project-1-tm-9
      </a>
    </div>
  );
}

export default PortfolioList;
