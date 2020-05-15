import React, { useState, useRef } from "react"
import useIntersect from "../useIntersect"

const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100)

const IntersectBox = ({
  children,
  video,
  backgroundImage,
  index,
  initial,
  handleIntersect,
}) => {
  const [active, setActive] = useState(initial || 0)
  const videoRef = useRef(null)

  const [ref, entry] = useIntersect({
    threshold: buildThresholdArray(),
  })

  const outOfViewport = entry.intersectionRatio < 0.3

  const activeClassName = outOfViewport ? "box" : "box active"

  if (videoRef.current && !outOfViewport) videoRef.current.play()

  return (
    <div className={activeClassName} ref={ref}>
      <div className="text-container">{children}</div>
      <div className="fader">0</div>
      {video && (
        <video muted loop playsInline preload="auto" ref={videoRef}>
          <source src={video} type="video/mp4" />
        </video>
      )}
      {backgroundImage && <img src={backgroundImage.src} />}
    </div>
  )
}

export default IntersectBox
