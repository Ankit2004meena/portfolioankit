import React from 'react'
import TypeWriter from "typewriter-effect"
import { HomeContainer, HomeLeft,Img, HomeRight, HomeInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HomeStyle'
import {Bio} from "./data/constants"
import HomeImg from "./image/HomeImg.png"
function Home() {

  return (
    <div>
      <div id ="home">
        <HomeContainer>
         
          <HomeInnerContainer>
              <HomeLeft id="Left">
                  <Title>Hi,I am <br/>{Bio.Name}</Title>

                  <TextLoop>
                    I am a 
                    <Span>
                      <TypeWriter 
                      options={{
                        strings:Bio.roles,
                        autoStart:true,
                        loop:true,
                      }}
                      />
                    </Span>
                  </TextLoop>
                  <SubTitle>{Bio.description}</SubTitle>
                  <ResumeButton href={Bio.resume} target='display'>Resume</ResumeButton>
              </HomeLeft>
              <HomeRight id="Right">
                <Img src={HomeImg} alt="My image" />
              </HomeRight>
          </HomeInnerContainer>
        </HomeContainer>
      </div>
    </div>
  )
}

export default Home
