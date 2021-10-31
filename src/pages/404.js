import * as React from "react"
import { Link } from "gatsby"
import { Container, Col } from "react-bootstrap"

// markup
const NotFoundPage = () => {
  return (
    <Container fluid className="NotfoundPage background-primary">
      <Col className="text-center">
        <h1 className="text-white">404 Page Not found</h1>
        <Link to="/" className="backLink text-pink">
          Go back to home page
        </Link>
      </Col>
    </Container>
  )
}

export default NotFoundPage
