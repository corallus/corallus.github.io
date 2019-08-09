import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Navbar, Nav } from "react-bootstrap";
import avatar from "../images/avatar.png"

const Header = ({ siteTitle }) => {
  const [expanded, setExpanded] = useState(false);
  const _handleLinkClick = (e, target) => {
    if (typeof window !== undefined) {
      e.preventDefault()
      const element = document.getElementById(target)
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  const sections = ['about', 'education', 'portfolio', 'skills', 'interests']
  return (
    <Navbar expanded={expanded} onToggle={() => setExpanded(!expanded)} bg="primary" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="#home">
        <span className="d-block d-lg-none">
          {siteTitle}
        </span>
        <span className="d-none d-lg-block">
          <img src={avatar} className="img-fluid img-profile rounded-circle border-1 mx-auto mb-2" alt="portret" />
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" onClick={() => setExpanded(false)}>
          {sections.map(section =>
            <Link
              onClick={e => _handleLinkClick(e, section)}
              to={'/#' + section}
              className="nav-link"
              key={section}
            >
              {section}
            </Link>
          )}
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
