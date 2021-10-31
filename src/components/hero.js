import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col } from "react-bootstrap"
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaLinkedin,
} from "react-icons/fa"

export default function Hero() {
  const data = useStaticQuery(graphql`
    query {
      mypic: file(relativePath: { eq: "myimgbox2.png" }) {
        childImageSharp {
          fixed(width: 350, height: 350) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Container className="hero" fluid>
      <Container className="p-t-100 hello-wrapper">
        <Row>
          <Col sm={12} md={8} className="p-t-90">
            <h2 className="text-white m-b-0 fs-50">Abdelkader Lounis</h2>
            <p className="fs-20 text-pink">Data Scientist, Software Engineer</p>
            <div className="socialIcons">
              <span className="social_icon_wrapper">
                <a href="#.">
                  <FaFacebookSquare className="social-link fs-30" />
                </a>
              </span>
              <span className="social_icon_wrapper">
                <a href="#.">
                  <FaLinkedin className="social-link fs-30" />
                </a>
              </span>
              <span className="social_icon_wrapper">
                <a href="#.">
                  <FaGithubSquare className="social-link fs-30" />
                </a>
              </span>
              <span className="social_icon_wrapper">
                <a href="#.">
                  <FaTwitterSquare className="social-link fs-30" />
                </a>
              </span>
              <span className="social_icon_wrapper">
                <a href="#.">
                  <FaYoutubeSquare className="social-link fs-30" />
                </a>
              </span>
            </div>
          </Col>
          <Col md={4} className="d-none d-sm-none d-md-block">
            <div className="myImgBox">
              <Img fixed={data.mypic.childImageSharp.fixed} alt="my picture" />
            </div>
          </Col>
        </Row>
      </Container>

      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
    </Container>
  )
}
