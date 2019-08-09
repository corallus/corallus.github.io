import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Study from './study';

export default () => {
    const data = useStaticQuery(graphql`
    query EducationQuery {
        allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___ended] }
            filter: { frontmatter: { templateKey: { eq: "study" } } }
        ) {
            edges {
                node {
                    ...StudyFragment
                }
            }
        }
    }
  `)
    const studies = data.allMarkdownRemark.edges
    return (
        <React.Fragment>
            {studies && studies.length &&
                studies.map(({ node: post }) => (
                    <Study study={post} key={post.id}></Study>
                ))
            }
        </React.Fragment>
    )
}