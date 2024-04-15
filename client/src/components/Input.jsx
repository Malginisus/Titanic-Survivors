import React from 'react';

export default function Input(props) {

    if(props.type==='select'){
        return(
            <div className='flex gap-4 text-lg w-7/12'>
                <label htmlFor={props.id} className='flex gap-2'>
                    <span className=''>{props.label}</span>
                    <select name={props.name} id={props.id} className=' px-2 bg-transparent rounded-full font-bold focus:bg-slate-50' required={props.required} onInput={props.onInput}>
                        <option value="0">Female</option>
                        <option value="1">Male</option>
                    </select>
                </label>
            </div>
        )
    }
    return (
        <div className='flex gap-4 text-lg'>
            <label htmlFor={props.id} className='flex gap-2'>
                <span className=''>{props.label}</span>
                <input type={props.type} name={props.name} placeholder={props.placeholder} className=' bg-transparent px-2 rounded-full focus:bg-slate-50 font-bold' maxLength={props.maxLength} required={props.required} onInput={props.onInput} />
            </label>
        </div>
    )
}