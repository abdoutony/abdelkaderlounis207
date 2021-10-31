import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar variant="dark" expand="lg" className="p-t-15 p-b-15" id="site-navbar">
        {/* <Container> */}
        <Link to="/" className="link-no-style">
          <Navbar.Brand
            as="p"
            className="m-b-0"
            style={{ fontFamily: "PoppinsMeduim" }}
          >
            Abdelkader Lounis
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/page-2" className="link-no-style">
              <Nav.Link as="span" eventKey="page-2">
                Page 2
              </Nav.Link>
            </Link>
          </Nav> */}
          <Nav className="ml-auto">
            <Link to="#" className="link-nav">
              <Nav.Link as="span" eventKey="page-2">
                Home
              </Nav.Link>
            </Link>

            <Link to="#about" className="link-nav">
              <Nav.Link as="span" eventKey="page-2">
                About
              </Nav.Link>
            </Link>
            <Link to="#education" className="link-nav">
              <Nav.Link as="span" eventKey="education">
                Education
              </Nav.Link>
            </Link>

            <Link to="#skills" className="link-nav">
              <Nav.Link as="span" eventKey="skills">
                Skills
              </Nav.Link>
            </Link>

            <Link to="#experience" className="link-nav">
              <Nav.Link as="span" eventKey="experience">
                Experience
              </Nav.Link>
            </Link>
            <Link to="#experience" className="link-nav">
              <Nav.Link as="span" eventKey="projects">
                Projects
              </Nav.Link>
            </Link>

            <Link to="#contact" className="link-nav">
              <Nav.Link as="span" eventKey="contact">
                Contact
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar
