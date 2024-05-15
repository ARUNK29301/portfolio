import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>ARUN</h2>
        <p><a href="mailto:arunkandhasamy29@gmail.com">{("arunkandhasamy29@gmail.com").toLowerCase()}</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      {/* <a href="https://icme.stanford.edu/">Stanford BCA</a> */}
      <p>
        {/* Hi, I&apos;m Arun. I am a Stanford BCA graduate, YC Alumni,
        and the VP of Engineering at  <a href="https://smileidentity.com">Smile Identity</a>. Previously,
        I was the co-founder and CTO of <a href="https://arthena.com">Arthena</a>
        , co-founder of <a href="https://matroid.com">Matroid</a>, and worked at
        {' '}<a href="https://planet.com">Planet</a> and <a href="https://facebook.com">Facebook</a>. */}
        {/* I'm Arun K, a passionate Full Stack Web Developer based in Coimbatore, Tamil Nadu. With expertise in React.js, TypeScript, Node.js, and more, I specialize in crafting innovative web solutions that exceed client expectations. Equipped with a Bachelor's degree in Computer Applications and certifications from Besant Technologies, I thrive in dynamic environments and am dedicated to continuous learning. Let's build something amazing together. */}
        I'm Arun K, a passionate Full Stack Web Developer from Coimbatore, Tamil Nadu. With expertise in React.js, TypeScript, Node.js, and more, I craft innovative web solutions that exceed expectations. Let's build something amazing together.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Arun <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
