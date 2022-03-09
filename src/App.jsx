import React from 'react'
import NavBar from './components/navbar'

const App = () => {
  return (
    <div
      className="w-[100vw] h-[100vh] flex flex-col items-start justify-start
    bg-white dark:bg-zinc-800 transition duration-200 dark:text-white"
    >
      <NavBar name="ERSİN ÇAKMAK" />
    </div>
  )
}

export default App
