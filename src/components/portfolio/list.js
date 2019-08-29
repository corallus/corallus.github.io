import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Project from './project';
import { Button } from 'react-bootstrap';

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
            {portfolio && portfolio.length &&
                portfolio.slice(0, itemsToShow).map(({ node: post }) => (
                    <Project project={post} key={post.id} />
                ))
            }
            <Button variant="info" className="d-print-none" onClick={() => setShowArchive(!showArchive)}>Show {showArchive ? 'less' : 'more'}</Button>
        </>
    )
}