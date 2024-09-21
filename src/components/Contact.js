import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { faMobile } from '@fortawesome/free-solid-svg-icons'; 
import { Container } from 'react-bootstrap';

function Contact() {
  return (
    <section id="contact">
      <Container className='border border-black'>
      <h2>CONTACT ME
      <i class="fa-brands fa-linkedin"></i>
      </h2>
      <br></br>
      <p ><FontAwesomeIcon icon={faEnvelope} />  E-mail: <a href="https://www.gmail.com/mail/#inbox?compose=new"> stalinshonewilson22@gmail.com</a>
      </p>
      <p><FontAwesomeIcon icon={faMobile} />  Mobile Number: +91-9495887945</p>
      <p><FontAwesomeIcon icon={faLinkedin}/>  LinkedIn: <a href="https://www.linkedin.com/in/stalin-shone-wilson">linkedin.com/in/stalin</a></p>
      </Container>
    </section>
  );
}

export default Contact;
