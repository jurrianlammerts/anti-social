import React, { useRef, useEffect } from "react"
import useIntersect from "../useIntersect"

const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100)

const IntersectBox = ({
  children,
  video,
  backgroundImage,
  index,
  initial,
  handleIntersect,
  verticalText,
}) => {
  const videoRef = useRef(null)
  const videoPlayer = videoRef.current

  const [ref, entry] = useIntersect({
    threshold: buildThresholdArray(),
  })

  const outOfViewport = entry.intersectionRatio < 0.3

  const activeClassName = outOfViewport ? "box" : "box active"

  const textclassName = verticalText
    ? "text-container vertical-text"
    : "text-container "

  if (videoPlayer && !outOfViewport) videoPlayer.play()

  return (
    <div className={activeClassName} ref={ref}>
      <div className={textclassName}>{children}</div>

      {video && (
        <video muted loop playsInline ref={videoRef} id="video">
          <source src={video} type="video/mp4" />
        </video>
      )}
      {backgroundImage && (
        <img src={backgroundImage.src} alt="backgroundImage" />
      )}
    </div>
  )
}

export default IntersectBox
