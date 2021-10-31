import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { Container, Row, Col } from "react-bootstrap"
import webDevCv from "../../content/downloads/Abdelkader'sResume.pdf"
import dataScienceCv from "../../content/downloads/DataScientistInternResume.pdf"
export default function About() {
  const ButtonDownload = styled.a`
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
    padding: 0.5em 1em;
    margin: 1em;
    text-decoration: none !important;
  `
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "robot.png" }) {
        childImageSharp {
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container id="about" fluid className="background-primary">
      <Container className="p-t-50 p-b-50">
        <Row>
          <Col md={3}>
            <Img fluid={data.file.childImageSharp.fluid} alt="robot image" />
          </Col>
          <Col md={9} className="d-flex justify-content-end">
            <div className="col-md-9">
              <h1 className="text-white text-center">About me</h1>
              <p className="text-white text-justify">
                A Full stack web developer{" "}
                <span className="text-pink">with 5 years of experience</span> in
                developing web applications, expert in both frontend and backend
                sides , I can work with 2 stacks ,{" "}
                <span className="text-pink">LARAVEL/VUEJS</span> stack and{" "}
                <span className="text-pink">MERN</span> stack , and i am seeking
                to learn more to improve my web dev career,beside web dev i'am a{" "}
                <span className="text-pink">data scientist</span> i work in the
                fields of <span className="text-pink">Data Analysis</span>,
                <span className="text-pink">Machine Learning</span>, and{" "}
                <span className="text-pink">Deep Learning</span>
              </p>
              <div className="text-right m-t-20">
                <ButtonDownload
                  href={webDevCv}
                  target="_blank"
                  className="btn-9"
                >
                  <span>Download My Web Dev CV</span>
                </ButtonDownload>
                <ButtonDownload
                  href={dataScienceCv}
                  target="_blank"
                  className="btn-9"
                >
                  <span>Download My Data Science CV</span>
                </ButtonDownload>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
