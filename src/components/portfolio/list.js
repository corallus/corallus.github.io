import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Project from './project';
import { Col, Row } from 'react-bootstrap';

export default () => {
    const data = useStaticQuery(graphql`
    query PortfolioQuery {
        allMarkdownRemark(
            sort: { order: [DESC, ASC], fields: [frontmatter___archive, frontmatter___ended] }
            filter: { frontmatter: { templateKey: { eq: "project" } } }
        ) {
            edges {
                node {
                    ...ProjectFragment
                }
            }
        }
    }
  `)
    const portfolio = data.allMarkdownRemark.edges
    return (
        <Row>
            {portfolio && portfolio.length &&
                portfolio.map(({ node: post }) => (
                    <Col sm={3} lg={4} className="mb-5">
                        <Project project={post} key={post.id}></Project>
                    </Col>
                ))
            }
        </Row>
    )
}