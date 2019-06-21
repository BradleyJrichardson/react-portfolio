import React from "react"

const { Consumer, Provider } = React.createContext()

export const ThemeConsumer = Consumer
export const ThemeProvider = Provider

export default function nullComponent({}) {
  return null
}
