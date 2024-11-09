import React from 'react';

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { RInput } from './RInput';

//@ts-ignore
export const RSearch = () => {
    const handleChange =() =>{
    
    }

    return (
        <RInput {...{handleChange, icon: "search", placeholder: "Search"}}/>
    )
}