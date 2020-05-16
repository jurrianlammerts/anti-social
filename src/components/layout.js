/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import "./layout.css"

import Github from "./icons/github"
import Logo from "./icons/logo"

const Layout = ({ children }) => {
  const [mainCursor, setMainCursor] = useState({ x: 0, y: 0 })
  const [trailingCursor, setTrailingCursor] = useState({ x: 0, y: 0 })

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

    setMainCursor({
      x: clientX,
      y: clientY,
    })

    callback(e)
  }

  return (
    <main
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
      {children}

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

      <div className="cursors">
        <div
          className="cursor"
          style={{
            left: mainCursor.x,
            top: mainCursor.y,
          }}
        />

        <div
          className="cursor"
          style={{
            left: trailingCursor.x,
            top: trailingCursor.y,
          }}
        />
      </div>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
