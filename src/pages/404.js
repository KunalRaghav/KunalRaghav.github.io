import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons"
import "../styles/404.css"
const NotFoundPage = () => (
  <div style={{
    display:"flex",
    flexDirection:"column",
    height:"100vh"
  }}>
    <SEO title="404: Not found" />
    <div style={{
      boxShadow:"2px 2px 2px rgba(0,0,0,0.6)",
      flex:"1 1 auto",
    }} class="top_404">
    <div>
      <div className="container">
        <h2><FontAwesomeIcon icon={faExclamationTriangle} fixedWidth/> 404 NOT FOUND</h2>
        <br/>
        <h1>Not all those who wonder are lost.</h1>
        <br/>
        <h2>Let me take you <a href="/" style={{color:"rgba(0, 0, 0, 0.7)",borderBottom:"4px dotted"}}>home</a></h2>
      </div> 
    
    </div>
    </div>
    <footer style={{
          display:"block",
          background:"var()"
        }}>
          Built with
          {` `}<FontAwesomeIcon icon={faHeart} className="fa-fw" style={{color:"red"}}/>{` `}
          by Kunal Raghav<br/>
          © {new Date().getFullYear()} 
        </footer>
  </div>
)

export default NotFoundPage
