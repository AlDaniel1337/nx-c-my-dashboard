import React from 'react'
import Image from 'next/image';
import { LAYOUT_CONFIG } from '@/lib/config/LayoutConfig';

interface LayoutUserDataProps {
  children?: React.ReactNode;
}


export const LayoutUserData = ( {} : LayoutUserDataProps ) => {
  
return (<>
  <div id="profile" className="px-6 py-10">
    <p className="text-slate-500">Welcome back,</p>
    <a href="#" className="inline-flex space-x-2 items-center">
      <span>
        <Image 
          width={ LAYOUT_CONFIG.profileImageSize } 
          height={ LAYOUT_CONFIG.profileImageSize }
          className="rounded-full w-8 h-8" alt="User avatar"
          src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c" 
        />
      </span>
      <span className="text-sm md:text-base font-bold">
        Edward Tompson
      </span>
    </a>
  </div>
</>)}