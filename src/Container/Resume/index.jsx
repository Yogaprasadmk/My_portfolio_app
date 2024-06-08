import React from 'react'
import PageHeaderContent from '../../Component/Pageheader';
import { BsInfoCircleFill } from "react-icons/bs";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css" 
import {data} from "./util.js";
import './style.scss';
import {MdWork} from "react-icons/md"
const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText = "My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="timeline">
        
        <div className="timeline_experience">
        
        <h3 className="timeline_experience_headertext"> Experience </h3>
          <VerticalTimeline
          layout={'1-column'}
          lineColor='var(--yellow-theme-main-color)'
          >
          {
            data.experience.map((item,i)=>(
              <VerticalTimelineElement
              key={i}
              className='timeline_experience_vertical-timeline-element'
              icon = {<MdWork/>}
              iconStyle= {{
                color: 'var(--yellow-theme-main-color)',
                background: '#181818',
              }}
              >

                <div className="vertical-timeline-element-title-wrapper">
                  <h2 className="vertical-timeline-element_title">
                    {item.Title}
                  </h2>
                  <h3 className="vertical-timeline-element_Company">
                    {item.Company}
                  </h3>
                  <h4 className="vertical-timeline-element_Description">
                    {item.Description}
                  </h4>
                  <h4 className="vertical-timeline-element_Duration">
                    {item.Duration}
                  </h4>
                  <h4 className="vertical-timeline-element_JobType">
                    {item.Jobtype}
                  </h4>
                </div>
              </VerticalTimelineElement>
            ))
          }
          </VerticalTimeline>
        </div>
  
        <div className="timeline_education">

          <h3 className="timeline_education_headertext"> Education </h3>
          <VerticalTimeline
          layout={'1-column'}
          lineColor='var(--yellow-theme-main-color)'
          >
          {
            data.Education.map((item,i)=>(
              <VerticalTimelineElement
              key={i}
              className='timeline_education_vertical-timeline-element'
             
              icon = {<MdWork/>}
              iconStyle= {{
                color: 'var(--yellow-theme-main-color)',
                background: '#181818',
              }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h2 className="vertical-timeline-element_Degree">
                    {item.Degree}
                  </h2>
                  <h3 className="vertical-timeline-element_Branch">
                    {item.Branch}
                  </h3>
                  <h4 className="vertical-timeline-element_College">
                    {item.College}
                  </h4>
                  <h4 className="vertical-timeline-element_Group">
                    {item.Group}
                  </h4>
                  <h4 className="vertical-timeline-element_School">
                    {item.School}
                  </h4>
                  <h4 className="vertical-timeline-element_Duration">
                    {item.Duration}
                  </h4>
                  <h4 className="vertical-timeline-element_cgpa">{item.cgpa}</h4>
                </div>
              </VerticalTimelineElement>
            ))
          }
          </VerticalTimeline>
        </div>
      </div>
    </section>
  )
}
export default Resume;