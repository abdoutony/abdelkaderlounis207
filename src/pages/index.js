import React from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Education from "../components/education"
import Skills from "../components/skills"
import Experience from "../components/experience"
import Contact from "../components/contact"
const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container fluid style={{ padding: "0" }}>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Contact />
    </Container>
  </Layout>
)

export default IndexPage
