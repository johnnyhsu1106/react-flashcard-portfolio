import { Card, Stack, Image } from 'react-bootstrap';
import linkLogo from '/images/link.svg';
import githubLogo from '/images/github.svg';
import { useState, useRef } from 'react';
// import { useProjectsContext } from '../context/ProjectContext';


const ProjectLink = ({
  name,
  app,
  github,
  description,
  image
}) => {
  
  const [isFlip, setIsFlip] = useState(false);
  const flip = isFlip ? 'flip' : '';
  console.log("is Flip ", isFlip);
  console.log(' flip ', flip);
  
  return (
    <Card
      className={`${flip} card mx-2 mb-4 p-3  d-flex justify-content-center`}

      onClick={() => { setIsFlip(!isFlip)}}
    >
      <Card.Body className={`front position-relative`}>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      
        <Stack 
          className='d-flex justify-content-end position-absolute end-0 bottom-0'
          direction="horizontal"
        >
          <Card.Link href={app} target='_blank'>
            <Image src={linkLogo} thumbnail  alt={name} className='logo' />
          </Card.Link>
          <Card.Link href={github} target='_blank'>
            <Image src={githubLogo} thumbnail  alt="github logo" className='logo' />
          </Card.Link>
        </Stack>
      </Card.Body>


      <Card.Body className='back'>
      <Card.Img
        // variant="bottom" 
        src={`images/${image}`} 
      />
      </Card.Body>


    </Card>
  )
}

export default ProjectLink;
