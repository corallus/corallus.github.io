import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Project from './project';
import { Col, Row, Button } from 'react-bootstrap';

export default () => {
    const [showArchive, setShowArchive] = useState(false)

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
    const itemsToShow = showArchive ? -1 : portfolio.filter(item => !item.node.frontmatter.archive).length

    return (
        <>
            <Row>
                {portfolio && portfolio.length &&
                    portfolio.slice(0, itemsToShow).map(({ node: post }) => (
                        <Col sm={3} lg={4} className="mb-5" key={post.id}>
                            <Project project={post} />
                        </Col>
                    ))
                }
            </Row>
            <Button variant="info" className="d-print-none" onClick={() => setShowArchive(!showArchive)}>Show {showArchive ? 'less' : 'more'}</Button>
        </>
    )
}