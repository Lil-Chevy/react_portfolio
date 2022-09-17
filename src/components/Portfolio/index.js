import React from "react";
import PortfolioList from "../PortfolioList";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Portfolio({ currentCategory }) {
  const { name, description } = currentCategory;
  return (
    <section href="#portfolio" id="portfolio">
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <PortfolioList />
    </section>
  );
}

export default Portfolio;
