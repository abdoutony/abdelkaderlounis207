import React from "react"
import { Col } from "react-bootstrap"
import Progress from "../utils/progress"
export default function SkillsCard(props) {
  return (
    <Col md={4} xs={12}>
      <div className="col-xs-12">
        <div
          className="image-flip"
          onTouchStart="this.classNameList.toggle('hover');"
        >
          <div className="mainflip">
            <div className="frontside">
              <div className="card">
                <div className="card-body text-center">
                  <p
                    className="card-title text-pink fs-25 p-t-30"
                    style={{ fontFamily: "PoppinsMeduim" }}
                  >
                    {props.title}
                  </p>
                  <p className="card-text text-white">{props.description}</p>
                </div>
              </div>
            </div>
            <div className="backside">
              <div className="card">
                <div className="card-body text-center">
                  {props.skills
                    ? props.skills.map((skill) => {
                        return (
                          <Progress
                            key={skill.id}
                            technology={skill.technology}
                            width={skill.width}
                          />
                        )
                      })
                    : "There is no skills"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  )
}
