import React from "react"
import PropTypes from "prop-types"
import Github from "./icons/github"
import Logo from "./icons/logo"

const Header = ({ siteTitle }) => {
  return (
    <header>
      <div className="logo">
        <a href="/">
          <Logo />
        </a>
      </div>
      <div className="logo">
        <a
          href="https://github.com/jurrianlammerts/anti-social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
      </div>
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
