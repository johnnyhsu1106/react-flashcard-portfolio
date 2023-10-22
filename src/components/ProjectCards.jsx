
import { Row } from 'react-bootstrap';
import ProjectCard from './ProjectCard'
import { useProjectsContext } from '../context/ProjectContext';



const ProjectCards = () => {
  const {
    filteredProjects
  } = useProjectsContext();

  return (
    <Row className='card-grid'>
      {filteredProjects.map((project) => {
        return (
          <ProjectCard key={project.id} {...project} />
        )
      })}
    </Row>
  )
}

export default ProjectCards
