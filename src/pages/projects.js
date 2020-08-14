import React from "react"
import "../styles/projects.css"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons"
import { Pill } from "../components/pill/pill"
import { PROJECTS } from "../data/projects"

const ProjectTop =()=>(
  <div>
  <div className="project_top">
    <div className="container">
      <h1>PROJECTS</h1>
      <p>Things I've worked upon in the past, these projects were used to self learn concepts and experiment with technologies</p>
      <br/>
    </div>
    </div>
    <div style={{background:"#dedede"}}>
      <div className="container">
      <h3 style={{margin:"auto 0px"}}><FontAwesomeIcon icon={faProjectDiagram} className="fa-fw"/>{' '}HIGHLIGHTS</h3>  
      </div>
    </div>
    <div style={{background:"#efefef"}}>
      <div className="container" style={{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-evenly"
      }}>
        <br/>
        {PROJECTS.projects.map(project=>{
          return(
            <ProjectCard key={project.link} name={project.name} link={project.link} description={project.description} keywords={project.keywords}/>
          );
        })}
      </div>
    </div>
  </div>
);

const Projects = () => (
  <Layout>
    <SEO title="Project" />
    <div>
    <ProjectTop/>
    </div>

  </Layout>
)

export default Projects



const ProjectCard = (props) => (
  <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",flex: "1 1 220px",margin:"10px 10px",border:"2px solid #dddddd",padding:"16px",borderRadius:"8px",background:"#fff"}}>
      <h4>{props.name}</h4>
      <p style={{color:"#323232",fontWeight:"400",fontSize:"0.9rem",margin:"8px 0"}}>{props.description}</p>
      <div>
        {props.keywords.map(keyword => {
          return(
          <Pill key={keyword} color="var(--shiny-shamrock)" textColor="#fff" fontSize={"0.7rem"}>{keyword}</Pill>
          )
        })}
      </div>
      <div style={{display:"flex",justifyContent:"end",margin:"8px 0 0 0"}}>
      <a href={props.link} style={{fontSize:"0.6rem",padding:"4px 8px",background:"var(--pink)",fontWeight:"900",color:"#fff"}}>TAKE A PEAK</a>
      </div>
  </div>
);