/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"

import "./layout.css"

import Github from "./icons/github"
import Logo from "./icons/logo"
import SEO from "./seo"

const Layout = ({ children }) => {
  const [mainCursor, setMainCursor] = useState({ x: 0, y: 0 })
  const [trailingCursor, setTrailingCursor] = useState({ x: 0, y: 0 })
  const [outOfBounds, setOutOfBounds] = useState(true)
  const rectRef = useRef(null)

  const cursorClassName = outOfBounds ? "cursor hide" : "cursor"

  useEffect(() => {
    const timer = setTimeout(() => {
      setTrailingCursor({
        x: mainCursor.x,
        y: mainCursor.y,
      })
    }, 100)
    return () => clearTimeout(timer)
  }, [mainCursor])

  const handleMouseMove = (e, callback) => {
    const { clientX, clientY } = e
    var rect = rectRef.current.getBoundingClientRect()

    if (
      clientX < 24 ||
      clientY < 24 ||
      clientX > rect.width - 24 ||
      clientY > rect.height - 24
    ) {
      setOutOfBounds(true)
    } else {
      setOutOfBounds(false)
    }

    setMainCursor({
      x: clientX,
      y: clientY,
    })

    callback(e)
  }

  return (
    <div
      className="App"
      role="main"
      ref={rectRef}
      onMouseMove={e =>
        handleMouseMove(e, ({ clientX, clientY }) =>
          setTimeout(() => {
            setTrailingCursor({
              x: clientX,
              y: clientY,
            })
          }, 100)
        )
      }
    >
      <SEO />
      {children}

      <div className="logo left-align">
        <a href="/">
          <Logo />
        </a>
      </div>
      <div className="logo right-align">
        <a
          href="https://github.com/jurrianlammerts/anti-social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
      </div>

      <div className="cursors">
        <div
          className={cursorClassName}
          style={{
            left: mainCursor.x,
            top: mainCursor.y,
          }}
        />

        <div
          className={cursorClassName}
          style={{
            left: trailingCursor.x,
            top: trailingCursor.y,
          }}
        />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
