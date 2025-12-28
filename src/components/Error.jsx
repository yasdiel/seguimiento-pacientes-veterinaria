export default function Error({mensaje}){
    return (
        <div className="bg-red-800 rounded-xl">
            <p className="text-white text-center p-3 uppercase font-bold mb-3 ">{mensaje}</p>
        </div>
    )
}