import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import "../styles/volunteering.css"
import { faAward, faTrophy,faHandHolding, faStream, faSignal, faVideo } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { VOLUNTEERING } from "../data/volunteering"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"

const Awards = () => (
  <div className="awards">
    <div className="container">
    <h3 style={{margin:"auto 0px"}}><FontAwesomeIcon icon={faTrophy} className="fa-fw"/> AWARDS</h3>
    </div>
  </div>
);


const Volunteering = () => (
  <div className="volunteering">
    <div className="container">
      <h3 style={{margin:"auto 0px"}}><FontAwesomeIcon icon={faHandHolding} className="fa-fw"/> VOLUNTEERING</h3>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
          {VOLUNTEERING.volunteering.map(volunteer => {
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

const TalkCard = (props) => (
  <div style={{
    borderRadius:"2px",
    color:"#212121",
    flex:"1 0 300px",
    margin:"10px 5px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"normal"
  }}>
    <h4 style={{
      fontWeight:"600",
      marginLeft:"5px",
      marginTop:"10px"
    }}><FontAwesomeIcon icon={faYoutube} style={{color:"#fff9"}} className="fa-fw"/> <a href={props.url} style={{
      background:"#fff9",
      padding:"2px 4px",
      borderRadius:"2px",
      color:"#A85E40"
    }}>{props.name}</a></h4>
    <iframe style={{margin:"10px 0px", width:"100%"}} src={props.embed} height="220" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
)

const Talks = () => (
  <div className="talks">
    <div className="container">
      <h3 style={{margin:"auto 0px"}}><FontAwesomeIcon icon={faVideo} className="fa-fw"/> TALKS</h3>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
        {VOLUNTEERING.talks.map(talk => {
          return (
            <TalkCard 
              name={talk.name}
              url={talk.url}
              embed={talk.embed}/>
          )
        })}
      </div>
    </div>
  </div>
)

const AchievementsPage = () => (
  <Layout>
    <SEO title="Achievements" />
    <div className="achievements_top">
      <div className="container">
        <h1>COMMUNITY WORK & VOLUNTEERING </h1>

      </div>
    </div>
    <Talks/>
    <Volunteering/>
  </Layout>
)


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

export default AchievementsPage;
