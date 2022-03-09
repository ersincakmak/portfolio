import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import useTheme from './hooks/useTheme'
import Home from './pages/home'
import Projects from './pages/projects'

const App = () => {
  useTheme()

  return (
    <div
      className="w-[100vw] h-[100vh] flex flex-col overflow-auto items-start justify-start
    bg-white dark:bg-zinc-800 transition duration-200 text-gray-800 dark:text-white"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
