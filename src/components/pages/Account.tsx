import { useAuthData } from "../../context";
import React from 'react';

export const Account: React.FC = () => {
     const { user } = useAuthData();

     return (
          <div className="page">
               <h2>Your Account</h2>
               <p>Username: {user.name}</p>
          </div>
     )
}