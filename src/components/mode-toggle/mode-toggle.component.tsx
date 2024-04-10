"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Switch } from "../ui/switch"
import { Label } from "../ui/label"

import "./mode-toggle.styles.css"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const [currentTheme, setCurrentTheme] = React.useState(theme)
  const [themeDisplayName, setThemeDisplayName] = React.useState(theme === "dark" ? "Dark Mode" : "Light Mode")

  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setCurrentTheme(newTheme);
    setThemeDisplayName(newTheme === "dark" ? "Dark Mode" : "Light Mode");
    setTheme(newTheme);
  }

  return (
    <div>
      <Label className="label" htmlFor="theme">{themeDisplayName}</Label>
      <Switch id="theme" onClick={toggleTheme}/>
    </div>
  )
}
