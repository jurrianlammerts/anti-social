import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import Box from "../components/intersectBox"
import socialMediaVideo from "../videos/social-media-slave.mp4"
import scrollVideo from "../videos/scroll.mp4"
import Layout from "../components/layout"

function App({ data }) {
  const [preloaded, setPreloaded] = useState(false)

  const appClassName = preloaded ? "" : "preload-transitions"

  useEffect(() => {
    const timer = setTimeout(function () {
      setPreloaded(!preloaded)
    }, 50)
    return () => clearTimeout(timer)
  }, [])

  const media = [
    {
      text:
        "We are overwhelmed in a world of created perfectionism, where we are all trying to reach an unattainable level, yet we don’t really realize the effort put into creating an “effortless” facade.",
      video: socialMediaVideo,
      isDark: true,
    },
    {
      heading: "Endless scrolling through your feed.",
      // text: "Platforms are being build to make YOU addicted.",
      video: scrollVideo,
      isDark: false,
    },
    {
      heading: "We need to disconnect, to reconnect.",
      image: data.subway.childImageSharp.fluid,
      isDark: true,
      buttonText: "Join the revolution",
      buttonUrl: "https://github.com/jurrianlammerts",
    },
  ]

  return (
    <Layout>
      <div className="App">
        <div className={appClassName}>
          <div className="box-container">
            {media.map((item, index) => {
              return (
                <Box
                  initial={index % 2}
                  key={index}
                  index={index}
                  backgroundImage={item.image && item.image}
                  video={item.video && item.video}
                  isDark={item.isDark}
                >
                  <h2>{item.heading}</h2>
                  <p>{item.text}</p>
                  {item.buttonUrl && item.buttonText && (
                    <a
                      className="button"
                      href={item.buttonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="github creator"
                    >
                      {item.buttonText}
                    </a>
                  )}
                </Box>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    subway: file(relativePath: { eq: "subway.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default App
