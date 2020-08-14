import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import "../styles/achievements.css"
import { faAward, faTrophy } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ACHIEVEMENTS } from "../data/achievements"

const Awards = () => (
  <div className="awards">
    <div className="container">
    <h3 style={{margin:"auto 0px"}}><FontAwesomeIcon icon={faTrophy} className="fa-fw"/> AWARDS</h3>
    </div>
  </div>
);


const Achievements = () => (
  <div className="achievements">
    <div className="container">
    <h3 style={{margin:"auto 0px"}}><FontAwesomeIcon icon={faAward} className="fa-fw"/> ACHIEVEMENTS</h3>
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
          {ACHIEVEMENTS.achievements.map(achievement => {
            return(
              <AchievementCard
                position={achievement.position}
                competition={achievement.competition}
                time={achievement.time}/>
            );
          })}
    </div>
    </div>
    <br/><br/>
  </div>
);

const AchievementsPage = () => (
  <Layout>
    <SEO title="Achievements" />
    <div className="achievements_top">
      <div className="container">
        <h2>ACHIEVEMENTS & AWARDS</h2>

      </div>
    </div>
    <Achievements/>
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
