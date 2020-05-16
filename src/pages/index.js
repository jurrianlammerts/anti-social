import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

// Components
import Box from "../components/intersectBox"
import Layout from "../components/layout"

// Media
import socialMediaVideo from "../videos/social-media-slave.mp4"
import subwayVideo from "../videos/subway.mp4"
import berlinVideo from "../videos/berlin.mp4"

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
      heading:
        "We are overwhelmed in a world of created perfectionism, where we are all trying to reach an unattainable level.",
      video: socialMediaVideo,
    },
    {
      heading:
        "Moving forward fast, living in the moment. Not thinking about tommorow.",
      video: subwayVideo,
      // verticalText: true,
    },
    {
      heading: "Abusing different substances during the weekend.",
      // text: "Platforms are being build to make YOU addicted.",
      video: berlinVideo,
    },
    {
      heading: "We need to disconnect, to reconnect.",
      image: data.black.childImageSharp.fluid,
      buttonText: "Join the revolution",
      buttonUrl: "https://github.com/jurrianlammerts/anti-social",
    },
  ]

  return (
    <Layout>
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
              >
                <h1>{item.heading}</h1>
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
    </Layout>
  )
}

export const query = graphql`
  query {
    black: file(relativePath: { eq: "black.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default App
