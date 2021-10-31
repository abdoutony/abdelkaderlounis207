import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import {
  webTitle,
  webDescription,
  WebDevSkills,
} from "../../content/skills/webdev/index"
import {
  dataTitle,
  dataDescription,
  DataScienceSkills,
} from "../../content/skills/datascience/index"
import {
  softTitle,
  softDescription,
  SoftSkills,
} from "../../content/skills/softskills"
import SkillsCard from "./utils/skillsCard"
const Skills = () => {
  return (
    <Container fluid id="skills" className="background-primary pb-5">
      <Container className="p-t-50">
        <Row>
          <Col md={12}>
            <h1 className="text-white text-center">Skills</h1>
            <Row className="mt-4">
              <SkillsCard
                title={webTitle}
                description={webDescription}
                skills={WebDevSkills}
              />
              <SkillsCard
                title={dataTitle}
                description={dataDescription}
                skills={DataScienceSkills}
              />
              <SkillsCard
                title={softTitle}
                description={softDescription}
                skills={SoftSkills}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Skills
