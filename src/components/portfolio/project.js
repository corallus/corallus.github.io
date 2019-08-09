import React from 'react'
import { graphql } from 'gatsby'
import { Card } from 'react-bootstrap'
import Img from "gatsby-image"
import Tool from "../tool"

export default ({ project }) => {
  const toolset = project.frontmatter.toolset
  return (
    <Card border="secondary" className="shadow">
      {project.frontmatter.image &&
        <a href={project.frontmatter.link} target="_blank">
          <Img className="card-img-top" fluid={project.frontmatter.image.childImageSharp.fluid} />
        </a>
      }
      <Card.Body>
        <Card.Title as="h3">{project.frontmatter.title}</Card.Title>
        <Card.Text dangerouslySetInnerHTML={{ __html: project.html }} />
        <ul className="list-inline">
          {toolset && Object.keys(toolset).map((key, index) => (
            toolset[key] &&
            <li className="list-inline-item" key={index}>
              <Tool tool={key} size="32" width="2em" />
            </li>
          ))}
        </ul>
      </Card.Body>
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
      customer
      link
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
      image {
        childImageSharp {
          fluid(maxWidth: 1024, maxHeight: 576, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`