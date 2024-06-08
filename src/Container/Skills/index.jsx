import "./style.scss";
import React from 'react'
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from '../../Component/Pageheader';
import {skillsdata} from './util.js'
import { Animate } from "react-simple-animate";
import { AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText = "My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills_contentwraperer">
        {
          skillsdata.map((item,i)=>(
            <div key={i} className="skills_contentwraperer_innercontent">
              <Animate play duration={1} delay={2} start={{transform: 'translateX(-20px)'}} end={{transform: 'translateX(0px)'}}>
                <h3 className='skills_contentwraperer_innercontent_categorytext'>{item.label}</h3>
                <div>
                  {
                    item.data.map((skillitem,j)=>(
                      <AnimateKeyframes
                      play
                      duration={1}
                      keyframes={["opacity: 1","opacity: 0"]}
                      iterationCount = "1">

                      <div className="progressbar" key={j}>
                        <p>{skillitem.skillName}</p>
                        <Line
                        percent={skillitem.percentage}
                        strokeWidth="2"
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth="2"
                        StrakeLinecap="square"
                        />
                      </div>
                      </AnimateKeyframes>
                    ))
                  }
                </div>       
              </Animate>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills;