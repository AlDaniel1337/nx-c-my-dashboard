import React from 'react'
import { IoBrowsersOutline, IoFootball, IoHeartOutline, IoLogoReact } from 'react-icons/io5'

interface IconProps {
    className?:  string | undefined,
    size?: number
}

export const ReactLogo = ( { className, size } : IconProps ) => 
    <IoLogoReact className={ className } size={ size }/>

export const BrowsersOutline = ( { className, size } : IconProps ) => 
    <IoBrowsersOutline className={ className } size={ size }/>

export const Football = ( { className, size } : IconProps ) => 
    <IoFootball className={ className } size={ size }/>

export const HeartOutline = ( { className, size } : IconProps ) => 
    <IoHeartOutline className={ className } size={ size }/>