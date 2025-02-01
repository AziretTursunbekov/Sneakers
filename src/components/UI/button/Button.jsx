import React from "react";
import styled from "styled-components";

const Button = ({ children, type, onClick, variant, disabled, ...props }) => {
  return (
    <div>
      <StyledButton
        type={type}
        onClick={onClick}
        variant={variant}
        disabled={disabled}
        {...props}
      >
        {children}
      </StyledButton>
    </div>
  );
};

export default Button;

const StyledButton = styled.button`
  width: 400px;
  height: 54px;
  border: none;
  cursor: pointer;
  color: ${(props) =>
    props.variant === "sign"
      ? "#FAFAFA"
      : props.variant === "images"
      ? "#F4F4F4"
      : props.variant === "contained"
      ? "#FFFF"
      : "none"};
  background: ${(props) =>
    props.variant === "outlined"
      ? "transparent"
      : props.variant === "contained"
      ? "#000000"
      : props.variant === "sign"
      ? "#4A4C6C"
      : props.variant === "trend"
      ? "#77794E"
      : "none"};
`;
