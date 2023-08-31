
import { Row } from 'react-bootstrap';
import ProjectLink from './ProjectLink'
import projects from '../projects.json';


const ProjectLinks = () => {
  return (
    <Row className='d-flex justify-content-center'>
      {projects.map((project) => {
        return (
          <ProjectLink key={project.id} {...project} />
        )
      })}
    </Row>
  )
}

export default ProjectLinks
