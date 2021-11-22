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
            <p className="fs-20 text-pink">Software Developer, Data Scientist</p>
            <div className="socialIcons">
              <span className="social_icon_wrapper">
                <a
                  href="https://www.facebook.com/thetechteacher2007"
                  target="_blank"
                >
                  <FaFacebookSquare className="social-link fs-30" />
                </a>
              </span>
              <span className="social_icon_wrapper">
                <a
                  href="https://www.linkedin.com/in/abdelkader-lounis/"
                  target="_blank"
                >
                  <FaLinkedin className="social-link fs-30" />
                </a>
              </span>
              <span className="social_icon_wrapper">
                <a href="https://github.com/abdoutony" target="_blank">
                  <FaGithubSquare className="social-link fs-30" />
                </a>
              </span>
              <span className="social_icon_wrapper">
                <a href="https://twitter.com/AbdelkaderLoun1" target="_blank">
                  <FaTwitterSquare className="social-link fs-30" />
                </a>
              </span>
              <span className="social_icon_wrapper">
                <a
                  href="https://www.youtube.com/c/TheTechTeacher2007"
                  target="_blank"
                >
                  <FaYoutubeSquare className="social-link fs-30" />
                </a>
              </span>
            </div>
          </Col>
          <Col md={4}>
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
