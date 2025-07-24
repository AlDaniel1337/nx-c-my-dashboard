
import React from 'react'

/// Definir que recibe este componente
interface CustomButtonProps {
  onClick: ()=>{},
  text: string
}


export const CustomButton = ( { onClick, text } : CustomButtonProps ) => {
  
return (
    <button 
        onClick={ onClick }
        className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
    >
        { text }
    </button>
)}