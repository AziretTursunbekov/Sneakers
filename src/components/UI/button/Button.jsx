import React from "react";
import styled from "styled-components";

const Button = ({ children, type, onClick, variant, ...props }) => {
  return (
    <div>
      <button type={type} onClick={onClick} variant={variant} {...props}>
        {children}
      </button>
    </div>
  );
};

export default Button;

const Buttons = styled.button`
  width: 400px;
  height: 54px;
  border: none;

  color: ${(prop) =>
    prop.variant === "sign"
      ? "#FAFAFA"
      : prop.variant === "images"
      ? "#F4F4F4"
      : "#000000"};

  background: ${(prop) =>
    prop.variant === "outlined"
      ? "transparent"
      : prop.variant === "contained"
      ? "#000000"
      : prop.variant === "sign"
      ? "#4A4C6C"
      : prop.variant === "trend"
      ? "#77794E"
      : "none"};
`;
