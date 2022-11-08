import React from "react";
import ContactForm from "../Contact";

function Footer() {
  return (
    <section className="my-2 footer">
      <p className="links">Please Check Out My Links!</p>
      <section className="links">
        <a href="https://github.com/Lil-Chevy">GitHub</a>
      </section>
      <section className="links">
        <a href="https://www.linkedin.com/in/jack-nowaczewski">LinkedIn</a>
      </section>
      <section className="links">
        <a href="https://stackoverflow.com/users/18707172/jack-nowaczewski">
          Stacked Overflow
        </a>
      </section>
    </section>
  );
}
export default Footer;
