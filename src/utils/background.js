import { useState } from "react"

export const useBackgroundTint = () => {
  const [background, setBackground] = useState("dark")

  const toggleBackground = value => {
    if (value === "dark") setBackground("dark")
    if (value === "light") setBackground("light")
  }
  return [background, toggleBackground]
}
