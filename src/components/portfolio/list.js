import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Project from './project';
import { CardColumns } from 'react-bootstrap';

export default () => {
    const data = useStaticQuery(graphql`
    query PortfolioQuery {
        allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___ended] }
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
        <CardColumns>
            {portfolio && portfolio.length &&
                portfolio.map(({ node: post }) => (
                    <Project project={post} key={post.id}></Project>
                ))
            }
        </CardColumns>
    )
}