import React from "react"
import BackgroundContext from "./BackgroundContext"
import { useBackgroundTint } from "../utils/background"

const BackgroundProvider = ({ children }) => {
  const [background, toggleBackground] = useBackgroundTint()

  return (
    <BackgroundContext.Provider value={{ background, toggleBackground }}>
      {children}
    </BackgroundContext.Provider>
  )
}

export default BackgroundProvider
