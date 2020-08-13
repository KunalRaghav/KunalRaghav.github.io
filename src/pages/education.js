import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import "../styles/education.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGraduationCap, faCertificate } from "@fortawesome/free-solid-svg-icons"
import {EDUCATION} from "../data/education"

const EducationCard=(props)=>(
  <div style={{
    background: "#fefefeee",
    borderRadius:"10px",
    color:"#212121",
    display:"inline-block",
    padding:"20px",
    minWidth:"280px",
    margin:"10px 20px 10px 0px"
  }}>
    <h3 style={{
      fontWeight:"400",
      fontSize:"1.3rem"
    }}>{props.level}</h3>
    <h4 style={{
      color:"#353535",
      fontWeight:"500"
    }}>{props.type}</h4>
    <h5 style={{
      color:"#656565",
      fontWeight:"500"
    }}>{props.insti}</h5>
    <h6>{props.duration}</h6>
  </div>
);

const CertificateCard=(props)=>(
  <div style={{
    background: "#fefefeee",
    borderRadius:"10px",
    color:"#212121",
    padding:"20px",
    minWidth:"280px",
    margin:"10px 20px 10px 0px"
  }}><a href={props.link}>
    <h4 style={{
      color:"#353535",
      fontWeight:"700",
      width:"200px"
    }}>{props.name}</h4>
    <h5 style={{
      color:"#656565",
      fontWeight:"500"
    }}>{props.issuedBy}</h5>
    <h6 style={{
      color:"#212121"
    }}>{props.issuedOn}</h6>
    </a>
  </div>
);

const Education=()=>(
  <div className="education">
    <div className="container">
      <h1>EDUCATION & CERTIFICATIONS</h1>
      <br/>
      <h3 style={{margin:"auto 0px"}}><FontAwesomeIcon icon={faGraduationCap} className="fa-fw"/> EDUCATION</h3>
      <div style={{display:"inline-block"}}>
          {EDUCATION.education.map(edu => {
            return(
              <EducationCard
                level={edu.level}
                type={edu.type}
                insti={edu.institution}
                duration={edu.duration}/>
            );
          })}
    </div>
    </div>
  </div>
);

const CertiPage = () => (
  <div className="certipage">
    <div className="container">
      <h3 style={{margin:"auto 0px"}}><FontAwesomeIcon icon={faCertificate} className="fa-fw"/> CERTIFICATIONS</h3>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
        {EDUCATION.certifications.map(certi => {
            return(
              <CertificateCard
                name={certi.name}
                link={certi.link}
                issuedBy={certi.issuedBy}
                issuedOn={certi.issuedOn}/>
            );
          })}
    </div>
    </div>
  </div>
);
const Certifications = () => (
  <Layout>
    <SEO title="Education and Certifications" />
    <div>
      <Education/>
      <CertiPage/>
    </div>
  </Layout>
)

export default Certifications;
