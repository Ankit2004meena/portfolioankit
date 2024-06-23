import styled from 'styled-components';


import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { Bio } from '../data/constants';


const FooterContainer = styled.div`
  width: 100%;
  padding: 1rem ;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(180deg, #ffffff 60%, #f1f7389a 90%);

`;


const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 1rem;

`;

const Logo = styled.h1`

  font-size: 20px;
  font-weight:600;
    font-family: "Sedan SC", serif;
   
    font-style: normal;
  

`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.2rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`

  text-decoration: none;
  font-size: 1.6rem;
  transition: color 0.2s ease-in-out;
 
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 0.1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0.1rem;
  font-size: 1rem;

  &:hover{transition: color 0.2s ease-in-out;}
  
`;
const SocialMediaIcon1 = styled.img`
width: 15px;
height: 15px;
transition: color 0.2s ease-in-out;
`;

const Copyright = styled.p`
  margin-top: 0.5rem;
  font-size: 1.5rem;
  
  text-align: center;
`;


function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Ankit Meena</Logo>
        <Nav>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>
    
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.Leetcode} target="display"><SocialMediaIcon1 src="https://img.icons8.com/?size=100&id=wDGo581Ea5Nf&format=png&color=000000"/>
          </SocialMediaIcon> </SocialMediaIcons>
        <Copyright>
          &copy;All rights reserved ,2024 Ankit Meena.
        </Copyright>

      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;