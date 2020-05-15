import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import Box from "../components/intersectBox"
import interiorVideo from "../videos/Busy-People.mp4"

function App({ data }) {
  const [preloaded, setPreloaded] = useState(false)
  const [isIntersecting, setIsIntersecting] = useState(false)

  const appClassName = preloaded ? "App" : "App preload-transitions"

  useEffect(() => {
    const timer = setTimeout(function () {
      setPreloaded(!preloaded)
    }, 50)
    return () => clearTimeout(timer)
  }, [])


  const media = [
    {
      heading: "King opens Unilever Foods Innovation Centre",
      text:
        "Today, King Willem-Alexander, opened the highly sustainable Unilever Foods Innovation Centre ‘Hive’ on the Wageningen Campus",
      image: data.firstImage.childImageSharp.fluid,
    },
    {
      heading: "Development of Stek Law",
      text:
        "The design reflects the bold and uplifting, yet professional attitude of the law firm.",
      image: data.secondImage.childImageSharp.fluid,
    },
    {
      heading: "Video with lovely exterior in pink and green tones",
      text:
        "Two classrooms in a building from the early 1900's were converted into the spacious living quarters for a young couple.",
      image: null,
      video: interiorVideo,
    },
    {
      heading: "Private residence with a touch of magic",
      text:
        "Two classrooms in a building from the early 1900's were converted into the spacious living quarters for a young couple.",
      image: data.thirdImage.childImageSharp.fluid,
    },
  ]

  return (
    <div className={appClassName}>
      <div className={boxClassName}>
        {media.map((item, index) => {
          return (
            <Box
              initial={index % 2}
              key={index}
              index={index}
              backgroundImage={item.image && item.image}
              video={item.video && item.video}
            >
              <h2>{item.heading}</h2>
              <p>{item.text}</p>
            </Box>
          )
        })}
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    firstImage: file(relativePath: { eq: "0.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    secondImage: file(relativePath: { eq: "1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thirdImage: file(relativePath: { eq: "2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default App
