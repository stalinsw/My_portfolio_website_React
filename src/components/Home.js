import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section id="home">
        <h1 className='name-section fs-1'>Hello, I'm 
            <b> Stalin Shone Wilson</b>
            </h1>
        <p>Quality Assurance | Front-end Development</p>
        <Button className="buttonHire mt-4" variant="dark" as={Link} to="/contact">Hire Me</Button>
        <Button className="buttonSkills mt-4 mx-2 " variant="dark" as={Link} to="/skills">Go to Skills Section</Button>
        </section>
    </>
  );
}

export default Home;
