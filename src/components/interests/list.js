import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Interest from './interest';
import { Col, Row } from 'react-bootstrap';

export default () => {
    const data = useStaticQuery(graphql`
    query InterestsQuery {
        allMarkdownRemark(
            sort: { order: [DESC, ASC], fields: [] }
            filter: { frontmatter: { templateKey: { eq: "interest" } } }
        ) {
            edges {
                node {
                    ...InterestFragment
                }
            }
        }
    }
  `)
    const interests = data.allMarkdownRemark.edges
    return (
        <Row>
            {interests && interests.length &&
                interests.map(({ node: post }) => (
                    <Col sm={3} lg={4} className="mb-5" key={post.id}>
                        <Interest project={post} />
                    </Col>
                ))
            }
        </Row>
    )
}