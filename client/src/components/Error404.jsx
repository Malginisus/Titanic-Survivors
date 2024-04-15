import glacier from '../assets/glacier.gif'

export default function Error404(){
    return (
        <div className="h-full w-full text-6xl bold weight-700 flex flex-col justify-center items-center gap-4 text-teal-400">
            <img src={glacier} className='w-80 rounded-2xl' />
            Error 404
        </div>
    )
}