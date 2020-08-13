import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faProjectDiagram, faLaptopCode, faCertificate, faGlobeAsia, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import style from "./sidebar.module.css"
const NavLink = (props) => (
    <Link
        to={props.to}
        activeClassName={style.active}
        style={{
            textDecoration:"none",
            display:"inline-flex",
            height:"80px",
        }} className={props.btColor}>
            <FontAwesomeIcon className={style.text_icon} style={{
                margin:"auto 0",
                padding:"10px 20px"
            }} icon={props.icon} size="1x"/><br/>
            <li className={style.text_icon} style={{
                margin:"auto 20px",
                fontSize:"0.9rem",
            }}> 
                {props.children}  
            </li>
    </Link>
)

export const Sidebar = () => (
    <div className={style.sidebar}>
        <ul style={{
          display:"flex",
          flexDirection:"column",
          justifyItems:"end",
          height:"100vh",
          listStyleType:"none",
          background:"rgba(0,0,0,0.8)"
        }}>

        <NavLink to="/" icon={faHome} btColor={style.nav_home}>HOME</NavLink>
        <NavLink to="/projects/" icon={faProjectDiagram} btColor={style.nav_projects}>PROJECTS</NavLink>
        <NavLink to="/work-experience/" icon={faLaptopCode} btColor={style.nav_workExp}>WORK EXPERIENCE<br/>& VOLUNTEERING</NavLink>
        <NavLink to="/education/" icon={faUserGraduate} btColor={style.nav_certi}>EDUCATION<br/>& CERTIFICATES</NavLink>
        <NavLink to="/socials/" icon={faGlobeAsia} btColor={style.nav_social}>SOCIALS</NavLink>
        </ul>
    </div>
);