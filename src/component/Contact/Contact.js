
import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

const Container =styled.div`
display:flex;
flex-direction:column;
justify-content:center;
position:relative;
z-index:1;
align-item:center;
@media(max-width:960px){
    padding:0px;
}
`
const Wrapper=styled.div`
postion:relative;
display:flex;
justify-content:space-between;
flex-direction:column;
align-items:center;
width:100%;
padding: 0px 0px 80px 0px;
gap:12px;
@media(max-wdth:960px){
    flex-direction:column;
}
`
const Title=styled.div`
font-size:42px;
text-align:center;
font-weight:600;
margin-top:65px;
font-family: "Sedan SC", serif;
   
font-style: normal;

@media(max-width:960px){
    margin-top:12px;
    font-size:16px;
}
`
const Desc=styled.div`
font-size:18px;
font-weight:450;
text-align:center;
padding:5px;
max-width:600px;
font-family: "Dancing Script", cursive;
   font-optical-sizing: auto;
   font-weight: <weight>;
   font-style: normal;
@media(max-width:960px){
    
    margin-top:12px;
}

`
const ContactForm=styled.form`
max-width:600px;
width:50%;
display:flex;
padding:25px;
justify-content:center;

padding:50px;
flex-direction:column;
gap:12px;
border-radius:100px;



`
const ContactInput=styled.input`
flex: 1;
background-color: transparent;
border: 3px dashed yellow;
outline: none;
font-size: 18px;
color:none;
font-family: "Dancing Script", cursive;
   font-optical-sizing: auto;
   font-weight: <weight>;
   font-style: normal;
border-radius: 12px;
padding: 12px 16px;
&:focus {
  border: 4px dashed blue;
}

`
const ContactInputMessage=styled.textarea`
flex: 1;
background-color: transparent;
border: 3px dashed yellow;
outline: none;
font-size: 18px;
color:black;
font-family: "Dancing Script", cursive;
   font-optical-sizing: auto;
   font-weight: <weight>;
   font-style: normal;
border-radius: 12px;
padding: 12px 16px;
&:focus {
  border: 3px dashed blue;
}
`
const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
 
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  
  font-size: 18px;
  font-weight: 600;
  
  transition: all 0.2s ease-in-out !important;
   
    background-image: linear-gradient(135deg, #FFA8A8 10%, #FCFF00 100%);;
    
   
    &:hover {
        transform: scale(1.10);
    transition: all 0.6s ease-in-out;
      
    filter: brightness(1);
    }    
`


function Contact() {
const  [open,setOpen]=React.useState(false);
const form=useRef();
const handleSubmit=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_gkc14qf', 'template_efn2otk', form.current, 'mBkuO9TzFBjPP3IG8')
    .then((result) => {
      setOpen(true);
      form.current.reset();
    }, (error) => {
      console.log(error.text);
    });
}
  return (
    <div>
      <Container id="contact">
        <Wrapper>
            <Title>Contact Me</Title>
            <Desc>Please reach out to me using following form</Desc>
            <ContactForm ref={form} onSubmit={handleSubmit}>
                <ContactInput placeholder="your Email " name="User_Email"/>
                <ContactInput placeholder='Your Name ' name="Name"/>
                <ContactInputMessage placeholder="Write Message here" rows="4" name="Message"/>
                <ContactButton type="submit" value="Send" />
            </ContactForm>
            <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={()=>setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
            </Wrapper>
      </Container>
    </div>
  )
}

export default Contact
