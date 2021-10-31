import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import { Form, Button } from "react-bootstrap"
export default function Contact() {
  return (
    <Container id="contact" fluid className="background-primary">
      <Container className="p-t-50 p-b-70">
        <Row>
          <Col md={12}>
            <h1 className="text-white text-center m-b-40">Contact me</h1>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col md={7} xs={12}>
            <Card className="col contact-card">
              <Card.Body>
                <Form
                  method="POST"
                  action="https://getform.io/f/67fa5ea7-35db-4d77-86de-d5b52cbb74ad"
                  className="col"
                >
                  <Form.Control
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="contact-input"
                    placeholder="Enter your full Name"
                    autoComplete="off"
                  />
                  <Form.Control
                    type="text"
                    id="Email"
                    name="Email"
                    className="contact-input"
                    placeholder="Enter your email"
                    autoComplete="off"
                  />
                  <Form.Control
                    id="Email"
                    className="contact-input"
                    as="textarea"
                    name="message"
                    placeholder="Message"
                    autoComplete="off"
                    rows={3}
                  />
                  <Button type="submit" className="button-contact">
                    Send
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
