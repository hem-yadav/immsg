import React from 'react';

//@ts-ignore
export const Logo = ({className, color}) => {
     return (
        <div className="flex shrink-0 items-center">
            <img
            alt="Your Company"
            src={`https://tailwindui.com/plus/img/logos/mark.svg?color=${color}`}
            className={className}
            />
        </div>
     )
}