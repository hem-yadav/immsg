import React, { useReducer, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuthData } from "../../context";

interface FormData {
  userName: string;
  password: string;
}

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuthData();

  const [formData, setFormData] = useReducer(
    (state: FormData, newItem: Partial<FormData>) => {
      return { ...state, ...newItem };
    },
    { userName: "", password: "" }
  );

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const doLogin = async () => {
    try {
      await login(formData.userName, formData.password);
      navigate("/account");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "An unknown error occurred");
    }
  };

  return (
    <div className="page">
      <h2>Login page</h2>
      <div className="inputs">
        <div className="input">
          <input
            value={formData.userName}
            onChange={(e) => setFormData({ userName: e.target.value })}
            type="text"
            placeholder='Username'
            className='border border-gray-outline rounded-md h-[40px] px-2'
          />
        </div>
        <div className="input">
          <input
            value={formData.password}
            onChange={(e) => setFormData({ password: e.target.value })}
            type="password"
            placeholder='Password'
            className='border border-gray-outline rounded-md h-[40px] px-2'
          />
        </div>
        <div className="button">
          <button onClick={doLogin}>Log in</button>
        </div>
        {errorMessage ? (
          <div className="error">{errorMessage}</div>
        ) : null}
      </div>
    </div>
  );
};
