import React from "react"
import Studies from "./education/list"
import { graphql, useStaticQuery } from "gatsby";

const Education = () => {
  const { markdownRemark: education } = useStaticQuery(graphql`
      query EducationQuery {
        markdownRemark(frontmatter: {templateKey: {eq: "education"}}) {
          html
        }
      }
    `)

  return (
      <>
        <div className="lead mb-5" dangerouslySetInnerHTML={{ __html: education.html }} />
        <Studies />
      </>
  )
}

export default Education
