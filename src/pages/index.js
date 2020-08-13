import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import "../styles/index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faMapMarkerAlt ,faAt, faCode, faWifi, faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import { Pill } from "../components/pill/pill"
import { SKILLS } from "../data/skills";

const Hero =({data})=>(
  <div className="heroWidget">
    <div className="container">
      <div style={{
        display: "flex",
        flexWrap:"wrap"
      }}>
        <Img className={`roundProfileImage flex_item`} fluid={data.fileName.childImageSharp.fluid} alt="" />
        <div className="flex_item" style={{flex:"1 1 auto", margin:"15px 30px"}}>
          <h1>Hi, I'm Kunal Raghav</h1>
          <br/>
          <p>
            A software engineer and a self taught developer who is passionate about mobile technologies and open source. I'm also a self procliamed graphic designer and internet surfer.
          </p>
          <br/>
          <ul style={{
            listStyle:"none"
          }}>
            <li><FontAwesomeIcon icon={faMapMarkerAlt} className="fa-fw"/>  New Delhi, India</li>
            <li><FontAwesomeIcon icon={faAt} className="fa-fw"/><a href="mailto:kraghav123@gmail.com">  kraghav123@gmail.com</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const SkillMapWeb = ()=>(
  <div style={{
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    color:"#fff"
  }}>
    {SKILLS.web.map((skill)=>{
      return(<Pill color={`var(--pink)`} textColor={"#fff"}>{skill}</Pill>);
    })}
  </div>
  );

  const SkillMapLang = ()=>(
    <div style={{
      display:"flex",
      flexWrap:"wrap",
      justifyContent:"center",
      color:"#fff"
    }}>
      {SKILLS.language.map((lang)=>{
        return(<Pill color={`var(--lilac)`} textColor={"#fff"}>{lang}</Pill>);
      })}
    </div>
    );

  const SkillMapApp = ()=>(
    <div style={{
      display:"flex",
      flexWrap:"wrap",
      justifyContent:"center",
      color:"#fff"
    }}>
      {SKILLS.mobile.map((mob)=>{
        return(<Pill color={`#32de84`} textColor={"#fff"}>{mob}</Pill>);
      })}
    </div>
  );

  const SkillMapTool = ()=>(
    <div style={{
      display:"flex",
      flexWrap:"wrap",
      justifyContent:"center",
      color:"#fff"
    }}>
      {SKILLS.tools.map((tool)=>{
        return(<Pill color={`var(--blue)`} textColor={"#fff"}>{tool}</Pill>);
      })}
    </div>
  );

const Skills=()=>(
  <div className="skills">
    <div className="container">
      <h2><FontAwesomeIcon icon={faCode} className="fa-fw"/> SKILLS</h2>
      <br/>
      <h3>Web</h3>
      <SkillMapWeb/>
      <br/>
      <h3>Languages</h3>
      <SkillMapLang/>
      <br/>
      <h3>App Development</h3>
      <SkillMapApp/>
      <br/>
      <h3>Other Tooling</h3>
      <SkillMapTool/>
      <div>
      </div>
    </div>
  </div>
);


const EducationCard=(props)=>(
  <div style={{
    background: "#fefefeee",
    borderRadius:"10px",
    color:"#212121",
    display:"inline-block",
    padding:"20px",
    minWidth:"200px",
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
)

const Education=()=>(
  <div className="education">
    <div className="container" style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
    <h2 style={{display:"inline-block",margin:"auto 0px"}}><FontAwesomeIcon icon={faGraduationCap} className="fa-fw"/> EDUCATION</h2>
    <div style={{display:"inline-block"}}>
      <EducationCard
        level="Bachelors of Technology"
        type="Computer Science and Engineering"
        insti="Bharati Vidyapeeth's College Of Engineering"
        duration="2017-2021"/>
      <EducationCard
        level="Senior Secondary"
        type="Science"
        insti="Mount Carmel School"
        duration="2015-2017"/>
    </div>
    </div>
  </div>
);

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <Hero data={data}/>
      <Skills/>
      <Education/>
    </div>
    

    
  </Layout>
)


export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "pot_cir.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900, maxHeight: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default IndexPage
