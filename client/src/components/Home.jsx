import cruise from "../assets/cruise.gif"
import Form from "./Form"

export default function Home() {
    return (
    <div className="grid grid-cols-2 grow justify-items-center items-center">
        <img className="aspect-auto w-3/4" src={cruise}/>
        <Form />
    </div>
    )
};