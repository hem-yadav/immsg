import React from 'react';
import { RMenuItems } from '../reusable';


export const menuItems = [
    { path: "/", name: "Your Profile" },
    { path: "/about", name: "Settings" },
    { path: "/logout", name: "Sign out" }
];

interface ProfileProps{
    className?: string;
}

export const Profile: React.FC<ProfileProps> = ({className}) => {
     return (
        <RMenuItems {...{menuItems, className}} />
     )
}