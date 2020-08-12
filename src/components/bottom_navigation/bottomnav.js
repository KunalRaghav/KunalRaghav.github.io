import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faProjectDiagram, faLaptopCode, faCertificate, faGlobeAsia } from "@fortawesome/free-solid-svg-icons";
import style from "./bottomnav.module.css"
const NavLink = (props) => (
    <Link
        to={props.to}
        activeClassName={style.active}
        style={{
            textDecoration:"none",
            display:"block",
            padding: "20px",
            flex:"1 1 auto"
        }} className={props.btColor}>
            <FontAwesomeIcon className={style.text_icon} style={{
                margin:"auto auto",
                display:"block"
            }} icon={props.icon} size="1.7x"/>
            {/* <li className={style.text_icon} style={{
                margin:"auto 20px",
                fontSize:"0.9rem",
            }}> 
            <br/>
                {props.children}  
            </li> */}
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
          overflow:"auto"
        }}>

        <NavLink to="/" icon={faHome} btColor={style.nav_home}>HOME</NavLink>
        <NavLink to="/projects/" icon={faProjectDiagram} btColor={style.nav_projects}>PROJECTS</NavLink>
        <NavLink to="/work-experience/" icon={faLaptopCode} btColor={style.nav_workExp}>WORK EXPERIENCE</NavLink>
        <NavLink to="/certifications/" icon={faCertificate} btColor={style.nav_certi}>CERTIFICATES</NavLink>
        <NavLink to="/socials/" icon={faGlobeAsia} btColor={style.nav_social}>SOCIALS</NavLink>
        </ul>
    </div>
);