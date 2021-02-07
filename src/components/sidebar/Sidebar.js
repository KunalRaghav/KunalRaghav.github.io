import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faProjectDiagram, faLaptopCode, faHandsHelping, faUserGraduate, faFileDownload } from "@fortawesome/free-solid-svg-icons";
import style from "./sidebar.module.css"
import { EXTERNAL } from '../../data/external';
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
                fontWeight:"700"
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
          listStyleType:"none",
          height:"100vh"
        }}>

        <NavLink to="/" icon={faHome} btColor={style.nav_home}>HOME</NavLink>
        <NavLink to="/work-experience/" icon={faLaptopCode} btColor={style.nav_workExp}>WORK EXP</NavLink>
        <NavLink to="/projects/" icon={faProjectDiagram} btColor={style.nav_projects}>PROJECTS</NavLink>
        <NavLink to="/volunteering/" icon={faHandsHelping} btColor={style.nav_social}>COMMUNITY<br/></NavLink>
        <NavLink to="/education/" icon={faUserGraduate} btColor={style.nav_certi}>EDUCATION</NavLink>
        <li className={style.nav_download_resume} style={{background:"#333333",display:"flex",flexDirection:"column",justifyContent:"center",flex:"1 1 auto",textAlign:"center",color:"#dedede",fontWeight:"700",padding:"20px"}}>
                <a href={EXTERNAL.resume} style={{color:"#dedede"}}><div>
                <FontAwesomeIcon icon={faFileDownload} size="3x" fixedWidth/><br/><br/>
                DOWNLOAD RESUME
                </div></a>
        </li>
        </ul>
    </div>
);