import React, { useRef, useEffect } from "react"
import useIntersect from "../utils/useIntersect"

const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100)

const IntersectBox = ({
  children,
  video,
  backgroundImage,
  index,
  initial,
  handleIntersect,
}) => {
  const videoRef = useRef(null)
  const videoPlayer = videoRef.current

  const [ref, entry] = useIntersect({
    threshold: buildThresholdArray(),
  })

  const outOfViewport = entry.intersectionRatio < 0.3

  const activeClassName = outOfViewport ? "box" : "box active"

  if (videoPlayer && !outOfViewport) videoPlayer.play()

  return (
    <div className={activeClassName} ref={ref}>
      <div className="text-container">{children}</div>

      {video && (
        <video muted loop playsInline ref={videoRef} className="video">
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
