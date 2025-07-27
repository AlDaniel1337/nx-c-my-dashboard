import { ReactLogo } from '@/lib/config/icons';
import React from 'react'

interface LayoutLogoProps {
  children?: React.ReactNode;
}

export const LayoutLogo = ( {} : LayoutLogoProps ) => {
  
return (<>
    <div id="logo" className="my-4 px-6">
        <h1 className="flex text-lg md:text-2xl font-bold text-white">
          <ReactLogo className='mr-2'/>
          <span>Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">Manage your actions and activities</p>
    </div>
</>)}