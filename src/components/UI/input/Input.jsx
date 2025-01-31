import React from "react";
import { createGlobalStyle } from "styled-components";

const Input = ({
  type = "text",
  value,
  onChange,
  placeholder = "",
  className = "",
  disabled = false,
  ...props
}) => {
  return (
    <>
      <GlobalStyle />
      <div>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={Input`${className}`}
          disabled={disabled}
          {...props}
        />
      </div>
    </>
  );
};

export default Input;

const GlobalStyle = createGlobalStyle`
  input{
    width: 408px;
    height: 48px;
    border-radius: 4px;
    border-color: #4A4C6C;
    padding: 24px;
  }


`;
