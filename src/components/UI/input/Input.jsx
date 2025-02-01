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
  width: 408px;
  height: 48px;
  border-radius: 4px;
  border-color: #4a4c6c;
  padding: 24px;
`;
