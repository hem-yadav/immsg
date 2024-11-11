import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
// import { useAuthData } from "../../auth/AuthContext";
import { nav } from "./navigation";
import { AppContext } from '../../context';

//@ts-ignore
function classNames(...classes) {
     return classes.filter(Boolean).join(' ')
}

interface RenderMenuProps{
     className?: string;
     onSelectMenu?: () => void
}

export const RenderMenu: React.FC<RenderMenuProps> = ({ className, onSelectMenu }) => {

     const {selectedMenu,  setSelectedMenu} = useContext(AppContext);
     // const { user, logout } = useAuthData();

     return (
          <div className={classNames('flex', className)}>
            {nav.map((item) => (
               <Link to={item.path} key={item.name}>
                    <div
                         key={item.name}
                         onClick={()=>{
                              onSelectMenu?.();
                              setSelectedMenu(item.path)
                         }}
                         aria-current={item.path === selectedMenu ? 'page' : undefined}
                         className={classNames(
                              item.path === selectedMenu ? 'bg-gray-1 text-black' : 'bg-transparent text-black',
                         'rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-1'
                         )}
                    >
                         {item.name}
                    </div>
              </Link>
            ))}
          </div>
     )
}