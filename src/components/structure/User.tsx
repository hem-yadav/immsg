import React from 'react';

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { RMenuItems } from '../reusable';
import { BellIcon } from '@heroicons/react/24/outline';


export const menuItems = [
    { path: "/", name: "Your Profile" },
    { path: "/about", name: "Settings" },
    { path: "/logout", name: "Sign out" }
];

interface UserProps{
    className?: string;
}

//@ts-ignore
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const User: React.FC<UserProps> = ({className}) => {
     return (
        <div className={classNames('flex text-gray-2', className)}>
            <div className='space-y-1 px-2 flex items-center justify-between'>
                <div className='flex items-center'>
                    <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="h-8 w-8 rounded-full"
                    />
                    <div className='flex flex-col px-2'>
                        <span className='text-sm font-medium text-black'>Tom Cook</span>
                        <span className='text-xs'>tom@example.com</span>
                    </div>
                </div>
                <BellIcon aria-hidden="true" className="h-6 w-6" />
            </div>
            <div>
                {menuItems.map((item) => (
                    <div
                            key={item.name}
                            className={classNames('bg-white text-gray-2', 'rounded-md px-3 py-2 text-sm font-medium')}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
          </div>
     )
}