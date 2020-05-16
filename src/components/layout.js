/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

import Github from "./icons/github"
import Logo from "./icons/logo"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="logo-left">
        <a href="/">
          <Logo />
        </a>
      </div>
      <div className="logo-right">
        <a
          href="https://github.com/jurrianlammerts/anti-social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
      </div>

      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
