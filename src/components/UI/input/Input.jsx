import styled from "styled-components";

const Input = ({ type, value, onChange, placeholder, disabled, ...props }) => {
  return (
    <StyledInput
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      {...props}
    />
  );
};

export default Input;

const StyledInput = styled.input`
  width: 400px;
  height: 48px;
  border: 1px solid #8a8585;
  border-radius: 4px;
  padding-left: 10px;
  ::placeholder {
    font-size: 16px;
    font-family: sans-serif;
  }
`;
