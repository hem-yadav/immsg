import React from 'react';

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { RMenuItems } from '../reusable';


export const menuItems = [
    { path: "/", name: "Your Profile" },
    { path: "/about", name: "Settings" },
    { path: "/logout", name: "Sign out" }
];

export const Profile = () => {
     return (
        <RMenuItems {...{menuItems}} />
     )
}