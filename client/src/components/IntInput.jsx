import React from "react";

export default function IntInput(props) {
    
    return (
        <div className="mx-12 grow flex flex-col">
            <label htmlFor={props.id}>{props.label}</label>
            <input  id={props.id} type="range" min={props.min} max={props.max} className="bg-teal-400"/>
        </div>
    )
}