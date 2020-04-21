import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Navbar, Nav } from "react-bootstrap"
import Img from "gatsby-image"

const Header = ({ siteTitle }) => {
  const [expanded, setExpanded] = useState(false)
  const _handleLinkClick = (e, target) => {
    if (typeof window !== undefined) {
      e.preventDefault()
      const element = document.getElementById(target)
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }
  const avatar = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "avatar.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  const sections = ["about", "education", "portfolio"]
  return (
    <Navbar
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      bg="primary"
      variant="dark"
      expand="lg"
      fixed="top"
    >
      <Navbar.Brand href="#home">
        <span className="d-block d-lg-none">{siteTitle}</span>
        <span className="d-none d-lg-block">
          <Img
            fixed={avatar.file.childImageSharp.fixed}
            className="img-fluid img-profile rounded-circle border-1 mx-auto mb-2"
            alt="portret"
          />
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" onClick={() => setExpanded(false)}>
          {sections.map((section) => (
            <Link
              onClick={(e) => _handleLinkClick(e, section)}
              to={"/#" + section}
              className="nav-link"
              key={section}
            >
              {section}
            </Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
