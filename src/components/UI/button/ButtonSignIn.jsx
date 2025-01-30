import React from "react";
import styled from "styled-components";

const ButtonSignIn = ({ children, type, onClick }) => {
  return (
    <div>
      <Buttonss type={type} onClick={onClick}>
        {children}
      </Buttonss>
    </div>
  );
};

export default ButtonSignIn;
const Buttonss = styled.button`
  width: 400px;
  height: 54px;
  border: none;
  color: white;
  background-color: #4a4c6c;
  font-size: 20px;
  font-family: sans-serif;
  font-weight: lighter;
  cursor: pointer;
`;
