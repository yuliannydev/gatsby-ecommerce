/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"
import { Content, Footer } from "../styles/componensts"


const Layout = ({ children }) => (
  <>
    <Header />
    <Content>
      <main>{children}</main>
      <Footer>
        © {new Date().getFullYear()}, Hecho en {" "}
        <span rol="img" aria-label="emoji">
          {" "}
           🇻🇪
        </span>{" "}
        con mucho {" "}
        <span rol="img" aria-label="emoji">
          {" "}
          💛
        </span>
      </Footer>
    </Content>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
