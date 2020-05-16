import { useEffect, useRef, useState } from "react"

export default ({ root = null, rootMargin, threshold = 0 }) => {
  const [entry, updateEntry] = useState({})
  const [node, setNode] = useState(null)
  const [loaded, setLoaded] = useState(false)

  // This value is set to true when this code runs in the browser
  useEffect(() => {
    setLoaded(true)
  }, [])

  if (loaded) {
    const observer = useRef(
      new window.IntersectionObserver(([entry]) => updateEntry(entry), {
        root,
        rootMargin,
        threshold,
      })
    )
  }

  useEffect(() => {
    const { current: currentObserver } = observer

    currentObserver.disconnect()

    if (node) currentObserver.observe(node)

    return () => currentObserver.disconnect()
  }, [node])

  return [setNode, entry]
}
