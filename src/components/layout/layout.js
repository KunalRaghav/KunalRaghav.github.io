/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import { Sidebar } from "../sidebar/Sidebar"
import { BottomNav } from "../bottom_navigation/bottomnav"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faGlobe, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faMedium, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  

  return (
    <div style={
      {
        display:"flex",
        flexDirection:"column",
        height:"calc(var(--vh, 1vh) * 100)"
      }
    }>
    
    <div style={{
      flex: "1 1 auto",
      overflow: "auto",
      display:"flex",
      flexDirection:"row",
      height:"calc(var(--vh, 1vh) * 100)"
      // height:"100vh",
    }}>
      <Sidebar className="sidebar"/>
      <div
        style={{
          flex: "1 1 auto",
          overflow: "auto",
        }}
      ><div>
        <div style={{
          boxShadow:"0px 2px 10px 5px rgba(0,0,0,0.3)"
        }}>
        {children}
        <Connect/>
        </div>
        <footer style={{
          display:"block",
        }}>
          Built with
          {` `}<FontAwesomeIcon icon={faHeart} className="fa-fw" style={{color:"red"}}/>{` `}
          by {data.site.siteMetadata.author}<br/>
          © {new Date().getFullYear()} 
        </footer>
        </div>
      </div>
    </div>
    <BottomNav/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const SocialCard=(props)=>(
  <div style={{
    flex:"1 1 120px",background: `${props.background}`,
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

export default Layout
