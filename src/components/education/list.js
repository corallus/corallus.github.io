import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Education from './education';

export default () => {
  const data = useStaticQuery(graphql`
    query EducationQuery {
        allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "education" } } }
        ) {
            edges {
                node {
                    ...EducationFragment
                }
            }
        }
    }
  `)

  return (
      <React.Fragment/>
  )
}