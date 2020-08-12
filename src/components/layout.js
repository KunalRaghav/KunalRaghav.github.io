/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// import "./layout.css"
import { Sidebar } from "./sidebar/Sidebar"

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
    <div style={{
      display:"flex",
      height:"100vh"
    }}>
      <Sidebar className="sidebar"/>
      <div
        style={{
          flex: "1 1 auto",
          overflow: "auto"
        }}
      ><div style={{
          margin: "0rem auto",
          maxWidth: 760,
          padding: "1rem 1rem",
          border:"1px red solid",
      }}>
        {children}
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          by {data.site.siteMetadata.author}
        </footer>
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
