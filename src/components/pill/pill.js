import React from "react"

export const Pill=(props)=>{
    let styl ={
        display:"inline-block",
        padding:"2px 10px",
        borderRadius: "6px",
        fontWeight: "900",
        margin:"2px 4px 2px 0px",
        background:`${props.color}`,
        color:`${props.textColor}`
    }
    if(props.hasOwnProperty("fontSize")){
        styl.fontSize = props.fontSize
    }
    return(
    <div style={styl}>
          {props.children}  
    </div>
);
}
    