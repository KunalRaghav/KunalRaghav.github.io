import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import "../styles/workExperience.css"
import { faBriefcase, faHandHolding } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { WORKEXP } from "../data/workexp"

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

const Volunteering = () => (
  <div className="volunteering">
    <div className="container">
      <h3 style={{margin:"auto 0px"}}><FontAwesomeIcon icon={faHandHolding} className="fa-fw"/> VOLUNTEERING</h3>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
          {WORKEXP.volunteering.map(volunteer => {
            return(
              <VolunteerCard
                role={volunteer.role}
                organisation={volunteer.organisation}
                start={volunteer.start}
                description={volunteer.description}
                duration={volunteer.duration}/>
            );
          })}
    </div>
    </div>
  </div>
);

const InternshipCard = (props) => (
  <div style={{
    background: "#fefefeee",
    borderRadius:"10px",
    color:"#212121",
    padding:"20px",
    flex:"1 1 220px",
    margin:"10px 5px",
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
    <div style={{whiteSpace:"pre-line",paddingTop:"20px"}}>{props.description}</div>
  </div>
)

const VolunteerCard = (props) => (
  <div style={{
    background: "#fefefeee",
    borderRadius:"10px",
    color:"#212121",
    padding:"20px",
    flex:"1 1 220px",
    margin:"10px 5px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"normal"
  }}>
    
    <h4 style={{
      fontWeight:"600",
    }}>{props.organisation}</h4>
      <div>
      <h5 style={{
        color:"#353535",
        fontWeight:"500"
      }}>{props.role}</h5>
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
    <div style={{whiteSpace:"pre-line"}}>{props.description}</div>
  </div>
)


const Work = () => (
  <Layout>
    <SEO title="Work Experience and Volunteering" />
    <div className="work_experience_top">
      <div className="container">
        <h1>WORK EXPERIENCE AND VOLUNTEERING</h1>
        <p></p>
      </div>
    </div>
    <Internships/>
    <Volunteering/>
  </Layout>
)

export default Work;
