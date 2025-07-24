import type { Metadata } from "next"
import { CounterComponent } from "@/lib/features/dashboard/counter/Counter";

export const metadata: Metadata = {
    title: 'Shopping Cart',
    description: 'Un simple contador',
    keywords: ['']
}

export default function Counter(){
    return (<div className="flex flex-col items-center justify-center w-full h-full">
        <CounterComponent />
    </div>)
}

