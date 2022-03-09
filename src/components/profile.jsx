import { VscGithub } from 'react-icons/vsc'
import { SiMaildotru } from 'react-icons/si'
import { BsLinkedin } from 'react-icons/bs'
import { motion } from 'framer-motion'

const SocialAccount = ({ link, icon: Icon }) => {
  return (
    <motion.a
      whileHover={{
        y: [0, -5, 0],
        transition: {
          duration: 0.3,
          ease: 'easeInOut',
        },
      }}
      href={link}
      className="text-3xl"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon />
    </motion.a>
  )
}

const Mail = ({ link, icon: Icon }) => {
  return (
    <motion.a
      whileHover={{
        y: [0, -5, 0],
        transition: {
          duration: 0.3,
          ease: 'easeInOut',
        },
      }}
      href={`mailto:${link}`}
      className="text-3xl"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon />
    </motion.a>
  )
}

const Profile = ({ profile }) => {
  return (
    <div className="px-8 w-full max-w-5xl mx-auto flex flex-col gap-8">
      <h2 className="font-bold text-4xl">{profile.name}</h2>
      <p
        className="bg-clip-text text-transparent bg-gradient-to-r text-2xl font-semibold
        from-pink-500 via-indigo-400 animate-gradient-x"
      >
        {profile.job}
      </p>
      <div className="flex items-center gap-4">
        <SocialAccount link={profile.linkedin} icon={BsLinkedin} />
        <SocialAccount link={profile.github} icon={VscGithub} />
        <Mail link={profile.mail} icon={SiMaildotru} />
      </div>
      <span
        className="p-8 indent-4 bg-gray-300 dark:bg-zinc-600 rounded max-w-3xl
        shadow-lg flex flex-col gap-3"
      >
        {profile.coverLetter.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </span>
    </div>
  )
}

export default Profile
