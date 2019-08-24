import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Education from "../components/education"
import Portfolio from "../components/portfolio/list"
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Nav, Badge, Row, Col } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";

const Section = (props) => (
  <section id={props.id} className="resume-section p-3 p-lg-5 d-flex flex-column justify-content-center">
    {props.children}
  </section>
)

const IndexPage = () => {
  const { markdownRemark: about } = useStaticQuery(graphql`
      query AboutQuery {
        markdownRemark(frontmatter: {templateKey: {eq: "about"}}) {
          frontmatter {
            title
            github
            linkedin
            name
            templateKey
            surname
            skills {
              name
              skills {
                name
                skills
              }
            }
          }
          html
        }
      }
    `)

  const fullName = [about.frontmatter.name, about.frontmatter.surname].join(' ')
  return (
    <Layout>
      <SEO title={fullName} />
      <Section id="about">
        <header>
          <h1>
            {about.frontmatter.name} <span className="text-primary">{about.frontmatter.surname}</span>
          </h1>
          <div className="subheading">
            {about.frontmatter.title}
          </div>
        </header>
        <div className="my-4 lead" dangerouslySetInnerHTML={{ __html: about.html }} />

        <section title="Skills" id="skills">
          <header>
            <h2>Skills</h2>
          </header>
          <Row>
          {about.frontmatter.skills && about.frontmatter.skills.map((skill, i) => (
            <Col key={i}>
              <h3>{skill.name}</h3>
              {skill.skills && skill.skills.map((subskill, j) => (
                <div key={j}>
                  <Badge variant="secondary" className="mr-2">{subskill.name}</Badge>
                  {subskill.skills && subskill.skills.map((subsubskill, k) => (
                    <Badge variant="primary" className="mx-2" key={k}>{subsubskill}</Badge>
                  ))}
                </div>
              ))}
            </Col>
          ))}
          </Row>
        </section>

        <Nav className="social-icons">
          <Nav.Link href={about.frontmatter.linkedin} target="_blank" className="pl-0">
            <FaLinkedin size="64" />
          </Nav.Link>
          <Nav.Link href={about.frontmatter.github} target="_blank">
            <FaGithub size="64" />
          </Nav.Link>
        </Nav>
      </Section>
      <hr className="d-print-none" />
      <Section title="Education" id="education">
        <header>
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
      <Section title="Interests" id="interests">
        <header>
          <h2>Interests</h2>
        </header>
      </Section>
    </Layout>
  )
}

export default IndexPage
