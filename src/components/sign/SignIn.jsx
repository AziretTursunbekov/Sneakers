import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Eye, EyeOff } from "lucide-react";

const SignIn = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const savedLogin = localStorage.getItem("login");
    const savedPassword = localStorage.getItem("password");
    if (savedLogin) setLogin(savedLogin);
    if (savedPassword) setPassword(savedPassword);
  }, []);

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("login", login);
    localStorage.setItem("password", password);
    alert("Данные сохранены!");
  };
  return (
    <MainSignInDiv>
      <ContentSection>
        <h1>Вход</h1>
        <FormTag>
          <label htmlFor="login">Логин</label>
          <input
            type="text"
            placeholder="Введите логин"
            id="login"
            value={login}
            onChange={handleLoginChange}
          />
        </FormTag>

        <FormTag>
          <label htmlFor="password">Пароль</label>
          <PasswordWrapper>
            <PasswordInput
              type={showPassword ? "text" : "password"}
              placeholder="Введите пароль"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <EyeButton
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </EyeButton>
          </PasswordWrapper>
        </FormTag>
        <Btn onClick={handleSubmit}>Войти</Btn>
        <TextDiv>
          <p>или</p>
          <a href="#">зарегистрироваться</a>
          <a href="#">Забыли пароль?</a>
        </TextDiv>
      </ContentSection>
    </MainSignInDiv>
  );
};

export default SignIn;

const MainSignInDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentSection = styled.section`
  width: 500px;
  height: auto;
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  h1 {
    font-size: 29px;
    font-weight: lighter;
  }
`;
const Btn = styled.button`
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
const FormTag = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  label {
    font-size: 15px;
    color: #6d6666;
  }
  input {
    width: 400px;
    height: 48px;
    border: 1px solid #8a8585;
    border-radius: 4px;
    padding-left: 10px;
  }
  input::placeholder {
    font-size: 16px;
    font-family: sans-serif;
  }
`;
const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const PasswordInput = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid #8a8585;
  border-radius: 4px;
  padding-left: 10px;
  padding-right: 40px;
  font-size: 16px;
  font-family: sans-serif;
`;
const EyeButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #444;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 9px;
  a {
    text-decoration: none;
    color: #444141;
  }
  p {
    color: #807c7c;
  }
`;
