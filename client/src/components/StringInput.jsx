import React from "react";

export default function StringInput(props){
    return(
        <div className="mx-12 grow flex flex-col">
            <img src={props.src} alt={props.alt} />
            <label className="py-2 px-4 my-2" htmlFor={props.id}>{props.label}</label>
            <input id={props.id} className="py-2 px-4 my-2 outline-teal-500/50 outline outline-2 rounded-lg" type="text" maxLength={props.maxLength} placeholder={props.placeholder} required={props.required} />
        </div>
    )
}