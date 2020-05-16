import React from "react"
import PropTypes from "prop-types"
import Github from "./icons/github"

const Header = ({ siteTitle }) => {
  return (
    <header>
      <a
        href="https://github.com/jurrianlammerts"
        target="_blank"
        rel="noopener noreferrer"
        className="logo"
      >
        <Github />
      </a>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
