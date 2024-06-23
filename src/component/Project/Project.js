
import React from 'react'
import {Container, Wrapper,Title,Desc,Divider,CardContainer,ToggleButtonGroup,ToggleButton} from "./ProjectStyle.js"
import { useState } from 'react'
import {projects} from "../data/constants.js"
import ProjectCard from '../../Card/ProjectCard.js';
function Project({openModal,setOpenModal}) {
    const [toggle,setToggle]=useState('all');
    
    //here ToggleButtonGroup is a part of material ui
  return (
    <div>
    <Container id="projects">
        <Wrapper>
            <Title>Projects</Title>
            <Desc>
                My Believes 
            </Desc>
            <ToggleButtonGroup>
            {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          } <Divider />
          {toggle === 'machine learning' ?
            <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
            :
            <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
          }
            </ToggleButtonGroup>
            <CardContainer>
                
            {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} />
            ))}
          {projects.filter((item) => item.category === toggle).map((project) => (
              <ProjectCard project={project} />
              
            ))
}
            </CardContainer>
        </Wrapper>

        </Container>  
    </div>
  ) 
}

export default Project
