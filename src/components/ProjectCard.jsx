import { Card, Stack, Image } from 'react-bootstrap';
import linkLogo from '/images/link.svg';
// import githubLogo from '/images/github.svg';
import jsLogo from '/images/javascript.svg';
import tsLogo from '/images/typescript.svg';

import { useState } from 'react';


const ProjectLink = ({
  name,
  app,
  githubJS,
  githubTS,
  description,
  image
}) => {
  const [isFlip, setIsFlip] = useState(false);
  const flip = isFlip ? 'flip' : '';
  
  return (
    <Card
      className={`${flip} card mx-2 mb-4 p-3  d-flex justify-content-center`}

      onClick={() => { setIsFlip(!isFlip)}}
    >
      <Card.Body className={`front position-relative`}>
        <Card.Title>{name}</Card.Title>
        <Card.Text className='description'>{description}</Card.Text>
      
        <Stack 
          className='d-flex justify-content-end position-absolute end-0 bottom-0'
          direction="horizontal"
        >
          <Card.Link href={app} target='_blank'>
            <Image src={linkLogo} thumbnail  alt={name} className='logo' />
          </Card.Link>
          {githubJS ? <Card.Link href={githubJS} target='_blank'>
            <Image src={jsLogo} thumbnail  alt="JS logo" className='logo' />
          </Card.Link> : null}
          {githubTS ? <Card.Link href={githubTS} target='_blank'>
            <Image src={tsLogo} thumbnail  alt="TS logo" className='logo' />
          </Card.Link> : null}
        </Stack>
      </Card.Body>


      <Card.Body className='back'>
      <Card.Img
        variant="bottom" 
        src={`images/${image}`} 
      />
      </Card.Body>


    </Card>
  )
}

export default ProjectLink;
