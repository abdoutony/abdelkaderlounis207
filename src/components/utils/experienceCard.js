import React from "react"
import { Card } from "react-bootstrap"
export default function ExperienceCard(props) {
  return (
    <Card className="background-pink m-b-15" style={{ borderRadius: "0px" }}>
      <Card.Body>
        <Card.Text className="text-white m-b-0">
          {props.workplace} / {props.company}
        </Card.Text>
        <Card.Text
          className="text-white m-b-0"
          style={{ fontFamily: "PoppinsMeduim" }}
        >
          {props.position}
        </Card.Text>
        <Card.Text className="text-white m-b-0">
          {props.from} - {props.to} / {props.cityCountry}
        </Card.Text>
        {/* <Card.Text className="text-white m-b-0"></Card.Text> */}
        <Card.Text className="text-white m-b-0">
          Acheivements:
        </Card.Text>
        <ul>
          {props.AchievementsTasks.map((item) => (
            <li className="text-white" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  )
}
