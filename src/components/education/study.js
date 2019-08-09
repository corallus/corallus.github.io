import React from 'react'
import { graphql } from 'gatsby'

export default ({ study }) => {
  return (
    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="resume-content">
        <h3 className="mb-0">
          {study.frontmatter.title}
        </h3>
        <div className="subheading mb-3">
          {study.frontmatter.degree}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: study.html }}
        />
      </div>
      <div className="resume-date text-md-right">
        <span className="text-primary">{study.frontmatter.date}</span>
      </div>
    </div>
  )
}

export const query = graphql`
  fragment StudyFragment on MarkdownRemark {
    excerpt(pruneLength: 400)
    html
    id
    frontmatter {
      title
      degree
      school
      started(formatString: "MMMM YYYY")
      ended(formatString: "MMMM YYYY")
    }
  }
`