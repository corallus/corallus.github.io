import React from 'react'
import { graphql } from 'gatsby'
import { Card } from 'react-bootstrap'
import Img from "gatsby-image"
import Tool from "../tool"
import { Col, Row } from 'react-bootstrap';

const Website = ({ title, image = null, link, archived }) => {
  return (
    <Card border="secondary" className="shadow h-100">
      {image &&
        <a href={link} rel="noopener noreferrer" target="_blank">
          <Img className="card-img-top" fluid={image.childImageSharp.fluid} />
        </a>
      }
      <Card.Body className="d-flex flex-column">
        <Card.Title as="h5">{title}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default ({ project }) => {
  const { title, image, link, toolset, websites } = project.frontmatter
  return (
    <Card as="section" className="my-5">
      <Row className="no-gutters">
        {project.frontmatter.image &&
          <Col sm={6}>
            <a href={link} rel="noopener noreferrer" target="_blank">
              <Img fluid={image.childImageSharp.fluid} className="card-img" />
            </a>
          </Col>
        }
        <Col>
          <Card.Body>
            <header>
              <Card.Title><h3>{title}</h3></Card.Title>
            </header>
            <Card.Text>
              <div dangerouslySetInnerHTML={{ __html: project.html }} />
            </Card.Text>
            <ul className="list-inline my-4">
              {toolset && Object.keys(toolset).map((key, index) => (
                toolset[key] &&
                <li className="list-inline-item" key={index}>
                  <Tool tool={key} size="32" width="2em" />
                </li>
              ))}
            </ul>
            {websites && websites.length > 0 &&
              <>
                <h4>Projects</h4>
                <Row>
                  {websites.map((website, index) =>
                    <Col sm={4} xl={3} className="mb-5" key={index}>
                      <Website title={website.name} link={website.link} image={website.image} archived={website.archived} />
                    </Col>
                  )}
                </Row>
              </>
            }
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export const query = graphql`
  fragment ProjectFragment on MarkdownRemark {
    excerpt(pruneLength: 400)
    html
    id
    frontmatter {
      title
      archive
      websites {
        name
        link
        image {
          childImageSharp {
            fluid(maxWidth: 1024, maxHeight: 576, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      link
      image {
        childImageSharp {
          fluid(maxWidth: 1024, maxHeight: 576, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      toolset {
        react
        angular
        bootstrap
        django
        gulp
        wordpress
        gatsby
        webpack
        jquery
        aws
        sass
      }
      started(formatString: "MMMM YYYY")
      ended(formatString: "MMMM YYYY")
    }
  }
`