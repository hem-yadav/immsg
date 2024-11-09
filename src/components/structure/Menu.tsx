import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import { NavItem } from '../../types';
import { useAuthData } from "../../auth/AuthContext";
import { nav } from "./navigation";
import { Profile } from './Profile';
import { Login } from './Login';

type MenuItemProps = {
     r: NavItem;
} 

const MenuItem: React.FC<MenuItemProps> = ({r}) => {
     return (
          <Link to={r.path}><div className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{r.name}</div></Link>
     )
}

export const RenderMenu = () => {
     const { user, logout } = useAuthData()
     return (
          <div className="bg-gray-100">

          <nav className="bg-gray-800 px-4 py-3 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
              
              <div className="flex-1 mx-4">
                <div className="relative text-gray-400 focus-within:text-gray-600">
                  <input type="text" placeholder="Search" className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:bg-gray-600"/>
                </div>
              </div>
               {user.isAuthenticated ? <Profile /> : <Login/> }
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
            <div className="container mx-auto mt-2 flex justify-center space-x-4">
               {nav.map((r, i) => {
                    if ((!r.isPrivate || user.isAuthenticated) && r.isMenu) {
                         return (
                          <MenuItem key={i} r={r}/>
                         )
                    }  else return false
               })}
            </div>
          </nav>
        
        </div>
     )
}