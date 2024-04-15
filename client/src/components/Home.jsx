import cruise from "../assets/cruise.gif"
import Input from "./Input.jsx";
import { useState } from "react";
import axios from 'axios'
import Survived from "./Survived.jsx";

export default function Home() {
    const [formData, setFormData] = useState({sex: "0"});
    const [survived, setSurvive] = useState(null);

    const handleInput = e => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleReset = e => {
        setSurvive(null)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post(
                'http://localhost:5000', 
                JSON.stringify(formData),
                {
                    timeout: 3000,
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                },
            ).then(
                response => {
                    setSurvive(response.data['Survived'])
                }
            )
        }
        catch (error){
            console.log('Error:', error)
        }
    };


    
    return (
    <div className="grid grid-cols-2 grow justify-items-center items-center">
        <img className="aspect-auto rounded-3xl w-7/12" src={cruise}/>
        {survived === null &&(
        <form onSubmit={handleSubmit} className="w-3/4 h-4/6 py-12 px-12 flex flex-col items-end content-center rounded-lg outline outline-teal-400 outline-solid justify-center gap-2 flex-wrap">
            <Input name='name' type='text' placeholder='John Doe' label='Name' onInput={handleInput}  />
            <Input name='age' type='tel' placeholder='30' label='Age' required={true} maxLength='3' onInput={handleInput} />
            <Input name='pclass' type='tel' placeholder='2' label='PClass' required={true} onInput={handleInput} />
            <Input name='sex' type='select' label='Sex' required={true} onInput={handleInput} />
            <Input name='fare' type='tel' placeholder='100' label='Fare' required={true} onInput={handleInput} />
            <Input name='parch' type='tel' label='Par/Ch' placeholder='1' required={true} onInput={handleInput} />
            <Input name='sibsp' type='tel' label='Sib/Sp' placeholder='2' required={true} onInput={handleInput} />
            
            <button type="submit" className="bg-teal-400 self-center hover:bg-teal-500 px-4 py-2 rounded-lg text-white font-bold ">Submit</button>
        </form>
        )}

        {survived !== null && ( 
                <Survived survived={survived} onClick={handleReset}/>
        )}

    </div>
    )
};