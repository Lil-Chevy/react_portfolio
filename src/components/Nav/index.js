import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Jack Nowaczewski
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              data-testid="about"
              href="#about"
              onClick={() => setContactSelected(true)}
            >
              About me
            </a>
          </li>
          <li className="mx-2">
            <a
              data-testid="portfolio"
              href="#portfolio"
              onClick={() => setContactSelected(true)}
            >
              Portfolio
            </a>
          </li>
          <li className="mx-2">
            <a
              data-testid="contact"
              href="#contact"
              onClick={() => setContactSelected(true)}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
