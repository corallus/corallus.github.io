import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Education from "../components/education/list"
import Portfolio from "../components/portfolio/list"
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
          Johannesburgstraat 9 · 5642EK, Eindhoven · +31 681 506 563  · <a href="mailto:v.vanbergen@gmail.com">v.vanbergen@gmail.com</a>
        </div>
      </header>
      <p className="lead">
        I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
      </p>
      <Nav className="social-icons">
        <Nav.Link href="https://www.linkedin.com/in/vincent-van-bergen/" className="ml-0">
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
    <hr className="d-print-none" />
    <Section title="Education" id="education">
      <header className="mb-5">
        <h2>Education</h2>
      </header>
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
