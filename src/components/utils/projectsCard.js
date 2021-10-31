import React from "react"
import { Container } from "react-bootstrap"

export default function ProjectsCard(props) {
  return (
    <Container fluid className="m-b-30">
      <p className="text-white m-b-0" style={{ fontFamily: "PoppinsMeduim"}}>
        {props.title}
      </p>
      <p className="text-pink m-b-0">
        {props.from} - {props.to}
      </p>
      <p className="text-white">{props.description}</p>
    </Container>
  )
}
