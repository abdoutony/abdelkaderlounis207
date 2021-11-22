import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ExperienceCard from "./utils/experienceCard"
import ProjectsCard from "./utils/projectsCard"
import { ProfessionalExperience } from "../../content/experience/index"
import { ProjectsBackgound } from "../../content/projects"
export default function Experience() {
  return (
    <Container id="experience" fluid className="background-primary">
      <Container className="p-t-50 p-b-50">
        <Row>
          <Col md={12}>
            <Row className="mt-4">
              <Col md={6} xs={12}>
                <h1 className="text-white text-center m-b-40">Experience</h1>
                {ProfessionalExperience
                  ? ProfessionalExperience.map((experience) => {
                      return (
                        <ExperienceCard
                          key={experience.id}
                          workplace={experience.workplace}
                          company={experience.company}
                          position={experience.position}
                          from={experience.from}
                          to={experience.to}
                          cityCountry={experience.cityCountry}
                          AchievementsTasks={experience.AchievementsTasks}
                        />
                      )
                    })
                  : "No professional experience"}
              </Col>
              <Col md={6} xs={12} className="">
                <h1 className="text-white m-b-40 text-center">Projects</h1>
                {ProjectsBackgound
                  ? ProjectsBackgound.map((project) => {
                      return (
                        <ProjectsCard
                          key={project.id}
                          title={project.title}
                          from={project.from}
                          to={project.to}
                          description={project.description}
                          link={project.link}
                        />
                      )
                    })
                  : "No projects background"}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
