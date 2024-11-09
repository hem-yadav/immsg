import React from 'react';

//@ts-ignore
export const Logo = ({className}) => {
     return (
        <div className="flex shrink-0 items-center">
            <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
            className={className}
            />
        </div>
     )
}