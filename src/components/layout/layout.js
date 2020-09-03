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
import { faHeart } from "@fortawesome/free-solid-svg-icons"

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

export default Layout
