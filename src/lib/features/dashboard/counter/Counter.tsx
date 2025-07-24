'use client'
import React, { useState } from 'react'
import { CustomButton } from '../components/CustomButton'

interface CounterProps {
    value?: number
}

export const CounterComponent = ({ value = 0 }: CounterProps) => {

const [counter, setCounter] = useState(value)
  
return (<>
<span>Productos en el carrito</span>
    <span className="text-9xl">{counter}</span>

    <div className="flex">
        <CustomButton 
            onClick={ async () => setCounter( counter+1 ) }
            text='+1'
        />
        <CustomButton 
            onClick={ async () => setCounter( counter-1 ) }
            text='-1'
        />
    </div>
</>)}