import React from "react";
import { createGlobalStyle } from "styled-components";

const Button = ({
  onClick,
  children,
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <>
      <GlobalStyle />
      <div>
        <button
          type={type}
          onClick={onClick}
          className={btn`${className}`}
          disabled={disabled}
        >
          {children}h
        </button>
      </div>
    </>
  );
};

export default Button;

const GlobalStyle = createGlobalStyle`
  button{
        width: 408px;
        height: 50px;
        background-color: #4A4C6C;
        border: none;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 400;
        font-size: 20px
  }
`;
