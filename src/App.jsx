import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'

const App = () => {
  return (
    <div
      className="w-[100vw] h-[100vh] flex flex-col items-start justify-start
    bg-white dark:bg-zinc-800 transition duration-200 text-gray-800 dark:text-white"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
