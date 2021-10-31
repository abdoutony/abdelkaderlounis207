/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Navbar from "./navBar"
import { Container, Row, Col } from "react-bootstrap"
import favicon from "../images/favicon/favicon.ico"
import Helmet from "react-helmet"
const Layout = ({ children, pageInfo }) => (
  <>
    <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <>
          <Container fluid style={{ padding: "0" }}>
            <Navbar />
            <main>{children}</main>
          </Container>
          <Container fluid className="px-0 m-t-60">
            <Row noGutters>
              <Col className="footer-col">
                <footer>
                  <span>
                    © {new Date().getFullYear()},All Rights Reserved
                    {` `}
                    <a href="https://www.gatsbyjs.org">Abdelkader Lounis</a>
                  </span>
                </footer>
              </Col>
            </Row>
          </Container>
        </>
      )}
    />
  </>
)

export default Layout
