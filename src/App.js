import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Resume from "./components/Resume";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

function App() {
  const [categories] = useState([
    {
      name: "Portfolio",
      description: "A Collection of Projects made by myself ",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <section>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <About></About>
        <Portfolio currentCategory={currentCategory}></Portfolio>
        <Resume />
      </main>
      <ContactForm></ContactForm>
      <Footer />
    </section>
  );
}

export default App;
