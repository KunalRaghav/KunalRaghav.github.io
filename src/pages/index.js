import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import "../styles/index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faMapMarkerAlt ,faAt, faCode, faGlobe, faEnvelope, faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faMedium, faTwitter, faLinkedin, faMediumM } from "@fortawesome/free-brands-svg-icons"
import { Pill } from "../components/pill/pill"
import { SKILLS } from "../data/skills";
import { EXTERNAL } from "../data/external"

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
            <li><FontAwesomeIcon icon={faFileDownload} className="fa-fw"/><a href={EXTERNAL.resume}>  Download Resume</a></li>
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


const SocialCard=(props)=>(
  <div style={{
    flex:"0 1 120px",background: `${props.background}`,
    borderRadius:"10px",
    padding:"10px",
    margin: "10px 10px"
    }}>
    <a href={props.link} style={{color:"#fefefe"}}>
    
    <h4 style={{
      fontWeight:"700",
    }}><FontAwesomeIcon icon={props.icon} className="fa-fw"/> {props.platform}</h4>
    <h6>{props.name}</h6>
  </a>
  </div>
)

const Connect=()=>(
  <div className="connect">
    <div className="container">
    <h2><FontAwesomeIcon icon={faGlobe} className="fa-fw"/> Connect </h2>
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
      <SocialCard
        name="KunalRaghav"
        background="#24292E"
        icon={faGithub}
        platform="Github"
        link="https://github.com/KunalRaghav"/>
      <SocialCard
        name="@KunalRaghav"
        background="#03A87C"
        icon={faMedium}
        platform="Medium"
        link="https://medium.com/@KunalRaghav/"/>
      <SocialCard
        name="@_Kunal_Raghav_"
        background="#1DA1F2"
        icon={faTwitter}
        platform="Twitter"
        link="https://twitter.com/_Kunal_Raghav_"/>
      <SocialCard
        name="kunalraghav"
        background="#0077b5"
        icon={faLinkedin}
        platform="Linkedin"
        link="https://www.linkedin.com/in/kunalraghav/"/>
      <SocialCard
        name="kraghav123@gmail.com"
        background="#EA4335"
        icon={faEnvelope}
        platform="Gmail"
        link="mailto:kraghav123@gmail.com"/>
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
      <Connect/>
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
