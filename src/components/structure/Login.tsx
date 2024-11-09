import React from 'react';
import { Link } from 'react-router-dom';

export const Login = () => (<Link to={'login'}>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Login
        </button>
    </Link>)