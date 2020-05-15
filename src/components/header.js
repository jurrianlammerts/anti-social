import React, { useContext } from "react"
import PropTypes from "prop-types"
import Github from "./icons/github"
import BackgroundContext from "../context/BackgroundContext"

const Header = ({ siteTitle }) => {
  const { background } = useContext(BackgroundContext)

  return (
    <header>
      <a
        href="https://github.com/jurrianlammerts"
        target="_blank"
        rel="noopener noreferrer"
        className="logo"
      >
        <Github dark={background === "light"} />
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
