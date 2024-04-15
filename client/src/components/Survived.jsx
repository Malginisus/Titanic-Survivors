import React from "react";

export default function Survived(props){
    return(
        <div className="outline outline-solid outline-teal-400 rounded-lg w-3/4 h-4/6 font-bold flex justify-center items-center text-3xl flex flex-col gap-4 ">
            {props.survived ? <p className="text-green-700">Survived😃</p> : <p className="text-red-700">Not Survived😔</p>}
            <button type="reset" className="bg-teal-400 self-center hover:bg-teal-500 px-4 py-2 rounded-lg text-white font-bold" onClick={props.onClick}>Reset</button>
        </div>
    )
}