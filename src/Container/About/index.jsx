import React from "react";
import { FaDev, FaDatabase } from "react-icons/fa";
import { DiAndroid, DiApple } from "react-icons/di";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../Component/Pageheader";
import { Animate } from "react-simple-animate";
import "./style.scss";

const personalDetails = [
  {
    label: "Name:",
    value: "Yogaprasad M K",
  },
  {
    label: "Age:",
    value: "21",
  },
  {
    label: "Address:",
    value: "Kumbakonam,Tamil Nadu,India",
  },
  {
    label: "Email:",
    value: "yogaprasadmk@gmail.com",
  },
];

function About() {
  return (
    <section className="about" id="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="developerContent">Final Year CSE Student</h3>
            <p>
            I'm a final year Computer Science and Engineering student at Muthayammal Engineering College. 
            With a strong foundation in algorithms, data structures, and various programming languages including 
            Java, Python, and JavaScript, I've delved into web development using HTML, CSS, React.js, and Node.js. 
            Additionally, I've explored machine learning with TensorFlow and gained familiarity with cloud computing platforms 
            like AWS. I've contributed to projects developing front-end web applications and interned at Codsoft, deploying 
            web-based solutions. Beyond academics, I actively participate in college symposiums and coding competitions, leveraging 
            my skills to solve real-world problems. Looking ahead, I'm eager to pursue further education in cloud computing and machine learning, 
            aspiring to make impactful contributions to the tech industry. Outside of studies, I enjoy exploring new technologies, 
            watching movies, and playing outdoor and indoor games.
            </p>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="personalContent">Personal Information</h3>
            <ul>
              {personalDetails.map((item) => (
                <li key={item.label}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{ transform: "translateX(0px)" }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <DiApple color="var(--yellow-theme-main-color)" size={60} />
                {/* <p className="service-text">Web Design</p> */}
              </div>
              <div>
                <FaDev color="var(--yellow-theme-main-color)" size={60} />
                {/* <p className="service-text">Web Development</p> */}
              </div>
              <div>
                <FaDatabase color="var(--yellow-theme-main-color)" size={60} />
                {/* <p className="service-text">Databases</p> */}
              </div>
              <div>
                <DiAndroid color="var(--yellow-theme-main-color)" size={60} />
                {/* <p className="service-text">Android Developement</p> */}
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}
export default About;
