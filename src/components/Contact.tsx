// import React, { useRef, useState } from 'react';
// import '../assets/styles/Contact.scss'; 
// // import emailjs from '@emailjs/browser';
// import Box from '@mui/material/Box'; 
// import Button from '@mui/material/Button'; 
// import SendIcon from '@mui/icons-material/Send'; 
// import TextField from '@mui/material/TextField'; 

// function Contact() {
 
//   // const [name, setName] = useState<string>(''); 
//   // const [email, setEmail] = useState<string>(''); 
//   // const [message, setMessage] = useState<string>(''); 

//   // const [nameError, setNameError] = useState<boolean>(false); 
//   // const [emailError, setEmailError] = useState<boolean>(false); 
//   // const [messageError, setMessageError] = useState<boolean>(false); 

//   // const form = useRef();

//   // const sendEmail = (e: any) => { 
//   //   e.preventDefault(); 
  
//   //   setNameError(name === ''); 
//   //   setEmailError(email === ''); 
//   //   setMessageError(message === ''); 

//     /* Uncomment below if you want to enable the emailJS */

//     // if (name !== '' && email !== '' && message !== '') {
//     //   var templateParams = {
//     //     name: name,
//     //     email: email,
//     //     message: message
//     //   };

//     //   console.log(templateParams);
//     //   emailjs.send('service_id', 'template_id', templateParams, 'api_key').then(
//     //     (response) => {
//     //       console.log('SUCCESS!', response.status, response.text);
//     //     },
//     //     (error) => {
//     //       console.log('FAILED...', error);
//     //     },
//     //   );
//     //   setName('');
//     //   setEmail('');
//     //   setMessage('');
//     // }
//   // };

//   return (
//     <div id="contact">
//       <div className="items-container">
//         <div className="contact_wrapper">
//             <h4>asthakawad12@gmail.com</h4>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;

import "../assets/styles/Contact.scss";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
function Contact() {
  const handleEmailClick = () => {
    window.location.href = "mailto:besal8953@gmail.com";
  };

  return (
    <div id="contact">
      <div className="items-container">
        <h4 className="sub-title">Follow me on my socials</h4>
        <div className="contact_wrapper" onClick={handleEmailClick}>
          <div className="circle">
            <p className="quote">
              the journey of a thousand miles begins with one step
            </p>
          </div>
          <MailOutlineIcon
            style={{
              fontSize: "42px",
              color: "white",
              position: "relative",
              zIndex: "1",
            }}
          />

          <h4 className="mail-subtext">besal8953@gmail.com</h4>
        </div>
        <div
          className="contact-bar"
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            marginLeft: "40px",
          }}
        >
          <a
            style={{ marginRight: "40px", fontSize: "42px" }}
            href="https://github.com/besalraj30"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            style={{ marginRight: "40px", fontSize: "42px" }}
            href="https://www.linkedin.com/in/besal-raj-7a02b7199/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            style={{ marginRight: "40px", fontSize: "42px" }}
            href="https://www.instagram.com/besalraj30/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
            style={{ marginRight: "40px", fontSize: "42px" }}
            href="https://x.com/besaldgaf"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
