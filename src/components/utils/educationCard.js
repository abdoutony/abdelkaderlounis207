import React from "react"
import { Card } from "react-bootstrap"
export default function EducationCard(props) {
  return (
    <Card className="background-pink" style={{ borderRadius: "0px" }}>
      <Card.Body>
        <Card.Text className="text-white m-b-0">
          {props.degree}
        </Card.Text>
        <Card.Text
          className="text-white m-b-0"
          style={{ fontFamily: "PoppinsMeduim" }}
        >
          {props.field}
        </Card.Text>
        <Card.Text className="text-white m-b-0">
          {props.from} - {props.to}
        </Card.Text>
        <Card.Text className="text-white m-b-0">
          {props.university}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
