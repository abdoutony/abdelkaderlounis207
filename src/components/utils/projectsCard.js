import React from "react"
import { Container } from "react-bootstrap"
import styled from "styled-components"
export default function ProjectsCard(props) {
  const ButtonProject = styled.a`
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
    padding: 0.5em 1em;
    margin: 1em;
    text-decoration: none !important;
  `
  return (
    <Container fluid className="m-b-30 ProjectCard">
      <div className="overlay">
        {props.link ? (
          <ButtonProject
            className="btn-project btn-9"
            href={props.link}
            target="_blank"
          >
            Visit Project
          </ButtonProject>
        ) : (
          <p className="text-center text-white p-4 NoLinkText">
            This project was built for a company , so it belongs to the company
            and i am not allowed to share it in public
          </p>
        )}
      </div>
      <p className="text-white m-b-0" style={{ fontFamily: "PoppinsMeduim" }}>
        {props.title}
      </p>
      <p className="text-pink m-b-0">
        {props.from} - {props.to}
      </p>
      <p className="text-white">{props.description}</p>
    </Container>
  )
}
