import { useCallback, useEffect, useState } from 'react'

const isDarkModeOnSystem = window.matchMedia(
  '(prefers-color-scheme: dark)'
).matches

function useTheme() {
  const [theme, setTheme] = useState(isDarkModeOnSystem ? 'dark' : 'light')

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }, [theme])

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme')
    if (currentTheme) {
      setTheme(currentTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)

    if (theme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme])

  return {
    theme,
    toggleTheme,
  }
}

export default useTheme
