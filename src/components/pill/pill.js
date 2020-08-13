import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"

export const Pill=(props)=>(
    <div style={{
        display:"inline-block",
        padding:"2px 10px",
        borderRadius: "6px",
        fontWeight: "900",
        margin:"2px 4px 2px 0px",
        background:`${props.color}`,
        color:`${props.textColor}`
        }}>
          {props.children}  
    </div>
);