import React, { useState } from 'react';
import { Link } from "react-router-dom";
// import { useAuthData } from "../../auth/AuthContext";
import { nav } from "./navigation";

//@ts-ignore
function classNames(...classes) {
     return classes.filter(Boolean).join(' ')
}

interface RenderMenuProps{
     className?: string;
}

export const RenderMenu: React.FC<RenderMenuProps> = ({ className }) => {
     const [ selectedMenu, setSelectedMenu ] = useState("/");
     // const { user, logout } = useAuthData();

     return (
          <div className={classNames('flex', className)}>
            {nav.map((item) => (
               <Link to={item.path}>
                    <div
                         key={item.name}
                         onClick={()=>setSelectedMenu(item.path)}
                         aria-current={item.path === selectedMenu ? 'page' : undefined}
                         className={classNames(
                              item.path === selectedMenu ? 'bg-gray-1 text-black' : 'bg-white text-black',
                         'rounded-md px-3 py-2 text-sm font-medium'
                         )}
                    >
                         {item.name}
                    </div>
              </Link>
            ))}
          </div>
     )
}