import cruise from "../assets/cruise.gif"
import DynamicForm from "./DynamicForm"

export default function Home() {
    return (
    <div className="flex">
        <img src={cruise}/>
        <DynamicForm />
    </div>
    )
};