import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import "../styles/workExperience.css"
import { faBriefcase, faHandHolding, faAward } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { WORKEXP } from "../data/workexp"
import { faAdobe } from "@fortawesome/free-brands-svg-icons"

const Internships = () => (
  <div className="internship">
    <div className="container">
      <h3 style={{margin:"auto 0px"}}><FontAwesomeIcon icon={faBriefcase} className="fa-fw"/> INTERNSHIPS</h3>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
          {WORKEXP.internships.map(internship => {
            return(
              <InternshipCard
                post={internship.post}
                company={internship.company}
                start={internship.start}
                description={internship.description}
                duration={internship.duration}/>
            );
          })}
    </div>
    </div>
  </div>
)


const InternshipCard = (props) => (
  <div style={{
    background: "#fefefeee",
    borderRadius:"10px",
    color:"#212121",
    padding:"20px",
    flex:"1 1 250px",
    margin:"10px 10px",
    display:"flex",
    flexDirection:"column",
  }}>
    <div>
    <h4 style={{
      fontWeight:"600",
    }}>{props.company}</h4>
    <h5 style={{
      color:"#353535",
      fontWeight:"500"
    }}>{props.post}</h5>
        <div>
          <h6 style={{
            color:"#fff",
            fontWeight:"700",
            whiteSpace: "pre-wrap",
            textAlign:"justify",
            background:"#656565",
            display:"inline-block",
            padding:"1px 4px",
            margin:"0 10px 0 0"
          }}>{props.start}</h6>
          <h6 style={{
            color:"#656565",
            fontWeight:"700",
            whiteSpace: "pre-wrap",
            textAlign:"justify",
            display:"inline-block",
            margin:"0 10px 0 0"
          }}>{props.duration}</h6>
        </div>
    </div>
    <div style={{paddingTop:"10px", paddingLeft:"10px"}}>
      <ul style={{
        lineHeight:"1.2em"
      }}>
      {props.description.split("\n").map(s => {
      return (
        <li style={{paddingBottom:"5px"}}>{s}</li>
      )
    })}
    </ul>
    </div>
  </div>
)

const Achievements = () => (
  <div className="achievements">
    <div className="container">
    <h3 style={{margin:"auto 0px"}}><FontAwesomeIcon icon={faAward} className="fa-fw"/> ACHIEVEMENTS</h3>
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
      <br/>
          {WORKEXP.achievements.map(achievement => {
            return(
              <AchievementCard
                position={achievement.position}
                competition={achievement.competition}
                time={achievement.time}/>
            );
          })}
    </div>
    </div>
  </div>
);

const AchievementCard=(props)=>(
  <div style={{
    background: "#fefefeee",
    borderRadius:"10px",
    color:"#212121",
    padding:"20px",
    flex:"1 1 220px",
    margin:"10px 5px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between"
  }}>
    <h4 style={{
      fontWeight:"400",
      fontSize:"1.3rem"
    }}>{props.position}</h4>
    <h5 style={{
      color:"#353535",
      fontWeight:"500"
    }}>{props.competition}</h5>
    <h6>{props.time}</h6>
  </div>
);


const Work = () => (
  <Layout>
    <SEO title="Work Experience and Achievements" />
    <div className="work_experience_top">
      <div className="container">
        <h1>WORK EXPERIENCE AND ACHIEVEMENTS</h1>
        <p></p>
      </div>
    </div>
    <Internships/>
    <Achievements/>
  </Layout>
)

export default Work;
