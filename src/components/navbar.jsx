import { BiRightArrowAlt } from 'react-icons/bi'
import { IoLogoReact } from 'react-icons/io5'
import ToggleTheme from './toggleTheme'
import { motion, useAnimation, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const ReactIcon = () => {
  const controls = useAnimation()
  const shouldReduceMotion = useReducedMotion()
  const [customRotate, setRotate] = useState(360)
  const [duration, setDuration] = useState(10)

  const ref = useRef()

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('pointerenter', () => {
        setRotate(-360)
        setDuration(1)
      })
      ref.current.addEventListener('pointerleave', () => {
        setRotate(360)
        setDuration(10)
      })
    }
  }, [])

  useEffect(() => {
    controls.start((_, { rotate = 0 }) => {
      const target = typeof rotate === 'number' ? rotate + customRotate : 360

      return shouldReduceMotion
        ? {}
        : {
            rotate: [rotate, target],
            transition: {
              duration,
              repeat: Infinity,
              ease: 'linear',
            },
          }
    })
  }, [duration, customRotate, shouldReduceMotion])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      className="text-6xl cursor-pointer text-react rounded-full"
    >
      <IoLogoReact />
    </motion.div>
  )
}

const NavLink = ({ to, title }) => {
  return (
    <button
      className="flex items-center bg-green-200 dark:bg-green-700 py-2 px-3 rounded-md gap-2
      group"
    >
      <Link
        to={to}
        className="transform group-hover:scale-110 group-hover:translate-x-3.5 transition duration-200 font-semibold"
      >
        {title}
      </Link>
      <span
        className="bg-green-800 text-green-100 dark:bg-green-100 p-0 rounded-full text-lg dark:text-green-900 transform
        group-hover:translate-x-5 transition"
      >
        <BiRightArrowAlt />
      </span>
    </button>
  )
}

const NavBar = () => {
  return (
    <nav
      className="p-8 w-full max-w-5xl mx-auto flex justify-between
    items-center"
    >
      <ReactIcon />
      <div className="flex items-center gap-4">
        <NavLink to="/projects" title="Projects" />
        <ToggleTheme />
      </div>
    </nav>
  )
}

export default NavBar
