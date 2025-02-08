/* eslint-disable react/prop-types*/
import { useState ,useEffect} from "react"

const LoadingScreen = ({ onComplet }) => {
    const [text, setText] = useState('')
    const fullText = "Welcome to my portfolio"

   useEffect(() => {
     let index = 0;
     const interval = setInterval(() => {
        setText(fullText.substring(0, index));
        index++;
    
        if(index > fullText.length){
        clearInterval(interval)

        setTimeout(() => {
            onComplet()
        }, 1000)
        }
    }, 100)
    return () => clearInterval(interval)
},[onComplet])
  return (
   <>
   <div 
   className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
    <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className="animate-blink ml-1">!</span> 
        </div>

        <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
         <div className="w-[40%] h-full bg-blue-600 shadow-[0_0_15px_#3b02f6] animate-loading-bar">
            {""}
         </div>
        </div>
    </div></>
  )
}

export default LoadingScreen