import React from 'react';
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from '../../Component/Pageheader';
import {Animate} from "react-simple-animate";
import './style.scss';
import {DiApple, DiAndroid} from 'react-icons/di'
import {FaDev, FaDatabase} from 'react-icons/fa';

// personal details
const personaldetails = [{
  label: "Name: ",
  value: "Yogaprasad"
},{
  label:  "Age: ",
  value:  "20 Years"
},{
  label:  "Address: ",
  value:  "Kumbakonam,Tamil Nadu,India"
},{
  label:  "Email: ",
  value:   "yogaprasadmk@gmail.com"
}
]

const jobsummary = 'Self-Taught Programmer & Web developer looking for job opportunities to work and collabrate with teams to work on real world projects.I am independent with 0 years of experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website developement,proactive feature optimization, and relentless debugging.Passionate about UI design.It is imperative that you provide thorough and professional approach to my  resume.I am to become a front-end developer or a Full-Stack (MERN) Developer you will be judged by your ability to UX and UI Concepts and follow design guidelines.It is about expressing to your attention to detail and hope you can implement design for your future employer. '

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText = "About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content" id="aboutcontent">
      
      <div className="about__content_personalwrapper">
      <Animate
        play
        duration={1.3}
        delay={0.7}
        start={{ transform: "translateX(-900px)" }}
        end={{ transform: "translateX(0px)" }}
      >
        <h3>Self-Taught Web Developer & Programmer </h3>
        <p>{jobsummary}</p>
       </Animate>
       <Animate
        play
        duration={1.3}
        delay={0.7}
        start={{ transform: "translateX(500px)" }}
        end={{ transform: "translateX(0px)" }}
      >
       <h3 className="personalinformationheadertext">Personal Information</h3>
        <ul>
            {
              personaldetails.map((item,i)=>(
                  <li key={i}>
                    <span className="title">{item.label}</span>
                    <span className="value">{item.value}</span>
                  </li>
              ))

            }
          </ul>
        </Animate>
      </div>
        <div className="about__content_servicewrapper">
        <Animate
        play
        duration={1.5}
        delay={1}
        start={{ transform: "translateX(600px)" }}
        end={{ transform: "translatex(0px)" }}
      >
      <div className="about__content_servicewrapper__innerContent">
            <div>
              <FaDev size={60} color= "var(--yellow-theme-main-color)"/>
            </div>
            <div>
              <DiAndroid size={60} color= "var(--yellow-theme-main-color)"/>
            </div>
            <div>
              <FaDatabase size={60} color= "var(--yellow-theme-main-color)"/>
            </div>
            <div>
              <DiApple size={60} color= "var(--yellow-theme-main-color)"/>
            </div>
          </div>
      </Animate>
        </div>
      </div>
    </section>
  )
}
export default About;
