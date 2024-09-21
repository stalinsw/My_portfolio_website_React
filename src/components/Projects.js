import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'  
import { Button } from 'react-bootstrap';

function Projects() {
  return (
    <section id="projects">
      <h2 className='g-3'>PROJECTS</h2>
      <div className='d-flex justify-content-end w-100'>
      <Button variant="dark"><a style={{ color: 'white', textDecoration: 'none' }} href='https://github.com/stalinsw'><FontAwesomeIcon icon={faGithub} /> GitHub</a></Button>
      </div>

      <div>
        <h5 className="text-start">Selenium Automation Framework: E-commerce Application</h5>
        <p className="text-start">Developed a Selenium framework for an e-commerce website to automate critical test scenarios and end-to-end test cases for 
        efficient regression testing.
        <ul>
          <li>Identified critical areas and end-to-end test cases for automation.</li>
          <li>Created automation scripts using Selenium WebDriver in Java and managed test cases with TestNG and used Maven for build and dependency management.</li>
          <li>Conducted functionality testing for each module and generated detailed test reports with Extent Reports.</li>
          <li>Cross-Browser and Parallel Testing: Verified compatibility across Chrome, Firefox, and Edge. Implemented parallel testing with TestNG.</li>
          <li>Skills: Selenium WebDriver, Core Java, TestNG, Maven, Data Driven Testing</li>
        </ul>
        </p>
<br></br>

<h5 className="text-start">API Automation Framework using RestAssured: Petstore Application</h5>
        <p className="text-start">Developed a Selenium framework for an e-commerce website to automate critical test scenarios and end-to-end test cases for 
        efficient regression testing.
        <ul>
          <li>Automated the API testing for a pet store application using Rest Assured, TestNG, and Maven.</li>
          <li>Configured a Maven project to manage dependencies, developed comprehensive test cases with Rest Assured to perform CRUD operations on the API, 
            and structured these tests into suites with TestNG for efficient execution and detailed reporting. </li>
        </ul>
        </p>
<br></br>

<h5 className="text-start">To do - React.js Application</h5>
        <p className="text-start">Built a simple task management application using React.js to help users create, manage, and delete tasks effectively.
        <ul>
          <li>Managed application state using React’s built-in state management to handle task additions, deletions, and updates.</li>
          <li>Applied CSS for styling and ensured the application is responsive and user-friendly.</li>
          <li>Skills: JavaScript · React.js · HTML · Cascading Style Sheets (CSS)</li>
        </ul>
        </p>
<br></br>

<h5 className="text-start">Portfolio - React.js Website</h5>
        <p className="text-start">Developed a simple personal portfolio website using React.js to showcase projects, skills, about and contact section.
        <ul>
          <li>Implemented responsive design techniques with CSS, Bootstrap and media queries to ensure a seamless experience across various devices and screen sizes.</li>
          <li>Utilized React Router for smooth navigation between different sections and created a dynamic single-page application.</li>
          <li>Employed basic animations and transitions to improve the visual appeal and user experience.</li>
          <li>Skills: JavaScript · React.js · HTML · Cascading Style Sheets (CSS)</li>
        </ul>
        </p>
<br></br>

      </div>
    </section>
  );
}

export default Projects;
