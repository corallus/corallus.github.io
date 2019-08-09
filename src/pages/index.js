import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Education from "../components/education/list"
import Portfolio from "../components/portfolio/list"
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Nav } from "react-bootstrap";

const Section = (props) => (
  <section id={props.id} className="resume-section p-3 p-lg-5 d-flex flex-column justify-content-center">
    {props.children}
  </section>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Vincent van Bergen" />
    <Section id="about">
      <header>
        <h1>
          Vincent <span className="text-primary">van Bergen</span>
        </h1>
        <div className="subheading">
          Johannesburgstraat 9 · 5642EK, Eindhoven · +31 681 506 563  · <a href="mailto:v.vanbergen@gmail.com">v.vanbergen@gmail.com</a>
        </div>
      </header>
      <div className="my-4">
        <p className="lead">
          I am an experienced full-stack in webdeveloper. Since I started my studying computer science I have been active as a freelancer.
          I have mostly provided my clients with complete solutions, ranging from backend CRM systems to frontend applications and hosting.
      </p>
        <p className="lead">
          Nowadays my focus is on frontend development combined with cloud applications.
      </p>
      </div>

      <Nav className="social-icons">
        <Nav.Link href="https://www.linkedin.com/in/vincent-van-bergen/" target="_blank" className="pl-0">
          <FaLinkedin size="64" />
        </Nav.Link>
        <Nav.Link href="https://github.com/corallus">
          <FaGithub size="64" />
        </Nav.Link>
      </Nav>
    </Section>
    <hr className="d-print-none" />
    <Section title="Education" id="education">
      <header>
        <h2>Education</h2>
      </header>
      <p className="lead mb-5">
        After my bachelor in computer science I started doing a master at EIT Digital, an organization for European entrepreneurs driving digital innovation in ICT & Entrepeneurship. My first years' specialization is in Service Design and Engineering, which I have completed at Aalto University in Finland. My second years' specialization is Service Oriented Business Process Management at Eindhoven University of Technology. After passing all courses I dropped out during my masters' thesis to work as a self-employed web developer.
      </p>
      <Education />
    </Section>
    <hr className="d-print-none" />
    <Section id="portfolio">
      <header>
        <h2>Portfolio</h2>
      </header>
      <Portfolio />
    </Section>
    <hr className="d-print-none" />
    <Section title="Skills" id="skills">
      <header>
        <h2>Skills</h2>
      </header>
    </Section>
    <hr className="d-print-none" />
    <Section title="Interests" id="interests">
      <header>
        <h2>Interests</h2>
      </header>
    </Section>
  </Layout>
)

export default IndexPage
