import React from 'react';

export const Profile = () => {
     return (
        <div className="relative">
            <button id="profileButton" className="text-gray-400 hover:text-white focus:outline-none">
                <img src="https://images.pexels.com/photos/2607040/pexels-photo-2607040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Profile" className="w-8 h-8 rounded-full"/>
            </button>
            <div id="profileDropdown" x-cloak className="hidden absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
            </div>
        </div>
     )
}