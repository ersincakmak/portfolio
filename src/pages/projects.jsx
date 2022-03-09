import { useQuery } from '@apollo/client'
import { getProjects } from '../graphql/queries/getProjects'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/projectCard'

const Projects = () => {
  const { data, loading, called } = useQuery(getProjects)

  if (loading) {
    return 'Loading...'
  }

  if (called && !data) {
    return 'There is an error with fetching projects'
  }

  return (
    <div className="w-full max-w-5xl mx-auto flex-1 p-8">
      <Link
        to="/"
        className="flex items-center gap-3 hover:underline text-lg
        leading-none mb-4 font-semibold"
      >
        <BsArrowLeft />
        Go Back to Home
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  )
}

export default Projects
