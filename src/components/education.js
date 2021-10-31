import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col } from "react-bootstrap"
import EducationCard from "./utils/educationCard"
import { AcademicBacground } from "../../content/education/index"
export default function Education() {
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
    <Container id="education" fluid className="background-primary">
      <Container className="p-t-50 p-b-50">
        <Row>
          <Col md={9} sm={12}>
            <h1 className="text-white">Education</h1>
            <Row className="mt-4">
              {AcademicBacground
                ? AcademicBacground.map((education) => {
                    return (
                      <Col md={6} xs={12} className="m-b-15" key={education.id}>
                        <EducationCard
                          degree={education.educationDegree}
                          field={education.educationField}
                          from={education.educationFrom}
                          to={education.educationTo}
                          university={education.educationUniversity}
                        />
                      </Col>
                    )
                  })
                : "No education Background"}
            </Row>
          </Col>
          <Col md={3} className="d-none d-sm-none d-md-block">
            <Img fluid={data.file.childImageSharp.fluid} alt="robot" />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
