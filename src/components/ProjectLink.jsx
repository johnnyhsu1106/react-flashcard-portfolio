import { Card, Stack, Image } from 'react-bootstrap';
import linkLogo from '/images/link.svg';
import githubLogo from '/images/github.svg';


const ProjectLink = ({
  name,
  app,
  github,
  description,
  image
}) => {
  return (
    // <Stack direction="horizontal">
    <Card style={{ width: '15rem', minHeight: '300px'}} className='mb-4 pb-3 mx-2'>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        
        <Card.Text>
          {description}
        </Card.Text>

      </Card.Body>

      <Stack direction="horizontal" className='d-flex justify-content-end'>
        <Card.Link href={app}>
          <Image src={linkLogo} thumbnail  alt={name}  style={{ width: '30px', height: '30px'}}/>
        </Card.Link>
        <Card.Link href={app}>
          <Image src={githubLogo} thumbnail  alt="github logo" />
        </Card.Link>
      </Stack>

      {/* <Card.Img 
        variant="bottom" src={image} 
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}/> */}
    </Card>
    // </Stack>
  )
}

export default ProjectLink;
