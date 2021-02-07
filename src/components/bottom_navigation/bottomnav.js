import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faProjectDiagram, faLaptopCode, faCertificate, faGlobeAsia, faUserGraduate, faTrophy, faHandsHelping } from "@fortawesome/free-solid-svg-icons";
import style from "./bottomnav.module.css"
const NavLink = (props) => (
    <Link
        to={props.to}
        activeClassName={style.active}
        style={{
            textDecoration:"none",
            display:"block",
            padding: "10px",
            flex:"1 1 auto",
            borderTop:"5px solid rgba(255,255,255,0.0)",
            fontSize:"12px",
            textAlign:'center',
            fontWeight:"bold"
        }} className={props.btColor}>
            <FontAwesomeIcon className={style.text_icon} style={{
                margin:"auto auto",
                display:"block"
            }} icon={props.icon} size="2x"/>
            <span className={style.text_icon} style={{fontSize:"0.6rem"}}>{props.children}</span>
    </Link>
)

export const BottomNav = () => (
    <div className={style.sidebar}>
        <ul style={{
          display:"flex",
          flexDirection:"row",
          width:"100vw",
          listStyleType:"none",
          background:"rgba(0,0,0,0.8)",
          overflow:"auto",
        }}>

        <NavLink to="/" icon={faHome} btColor={style.nav_home}>HOME</NavLink>
        <NavLink to="/work-experience/" icon={faLaptopCode} btColor={style.nav_workExp}>WORK EXP</NavLink>
        <NavLink to="/projects/" icon={faProjectDiagram} btColor={style.nav_projects}>PROJECTS</NavLink>
        <NavLink to="/volunteering/" icon={faHandsHelping} btColor={style.nav_social}>COMMUNITY<br/></NavLink>
        <NavLink to="/education/" icon={faUserGraduate} btColor={style.nav_certi}>EDUCATION</NavLink>
        </ul>
    </div>
)