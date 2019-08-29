import React from 'react'
import { graphql } from 'gatsby'
import { Card } from 'react-bootstrap'
import Img from "gatsby-image"

export default ({ project: interest }) => {
  return (
    <Card border="secondary" className="shadow h-100">
      {interest.frontmatter.image &&
        <Img className="card-img-top" fluid={interest.frontmatter.image.childImageSharp.fluid} />
      }
      <Card.Body className="d-flex flex-column">
        <Card.Title as="h3">{interest.frontmatter.title}</Card.Title>
        <Card.Text dangerouslySetInnerHTML={{ __html: interest.html }} className="flex-grow-1" />
      </Card.Body>
    </Card>
  )
}

export const query = graphql`
  fragment InterestFragment on MarkdownRemark {
    excerpt(pruneLength: 400)
    html
    id
    frontmatter {
      title
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