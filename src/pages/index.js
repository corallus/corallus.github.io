import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Education from "../components/education/list"
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
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
        </div>
      </header>
      <p className="lead">
      </p>
      <Nav className="social-icons">
        <Nav.Link href="#" className="ml-0">
          <FaLinkedin size="64" />
        </Nav.Link>
        <Nav.Link href="#">
          <FaGithub size="64" />
        </Nav.Link>
        <Nav.Link href="#">
          <FaFacebook size="64" />
        </Nav.Link>
      </Nav>
    </Section>
    <hr />
    <Section title="Education" id="education">
      <header className="mb-5">
        <h2>Education</h2>
      </header>
      <Education />
    </Section>
    <hr />
    <Section id="portfolio">
      <header>
        <h2>Portfolio</h2>
      </header>
    </Section>
    <hr />
    <Section title="Skills" id="skills">
    </Section>
    <hr />
    <Section title="Interests" id="interests">
    </Section>
  </Layout>
)

export default IndexPage
