import useTheme from '../hooks/useTheme'

const ToggleTheme = () => {
  const { toggleTheme, theme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="flex p-1.5 gap-3 bg-gray-300 dark:bg-gray-600 relative rounded transition-colors"
    >
      <span
        className={`absolute w-14 top-2 bottom-2 rounded bg-gray-400 dark:bg-gray-800 z-10
         ${theme === 'dark' ? 'left-1.5' : 'left-[4.625rem]'} transition-all`}
      />
      <div className="text-center p-1 bg-transparent w-14 z-20">Dark</div>
      <div className="text-center p-1 bg-transparent w-14 z-20">Light</div>
    </button>
  )
}

export default ToggleTheme
