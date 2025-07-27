'use client'

import React from 'react'
import { menuItems } from '../menu/menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LayoutMenuProps {
  children?: React.ReactNode;
}


export const LayoutMenu = ( {} : LayoutMenuProps ) => {

const currentPath = usePathname();
  
return (<>
    <div id="nav" className="w-full px-6">

        {menuItems.map( item => (
            <Link href={item.path} 
                key={ item.path }
                className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150
                ${currentPath == item.path ? 'bg-blue-800' : '' }`}
            >
                <div>
                    { item.icon }
                </div>
                <div className="flex flex-col">
                    <span className="text-lg font-bold leading-5 text-white">{item.title}</span>
                    <span className="text-sm text-white/50 hidden md:block">{item.subtitle}</span>
                </div>
            </Link>
        ))}

    </div>
</>)}