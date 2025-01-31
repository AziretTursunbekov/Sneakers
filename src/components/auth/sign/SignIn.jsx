import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Eye, EyeOff } from "lucide-react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    if (savedEmail) setEmail(savedEmail);
    if (savedPassword) setPassword(savedPassword);
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    const newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = "E-mail не может быть пустым";
      isValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = "Некорректный формат e-mail";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Пароль не может быть пустым";
      isValid = false;
    } else if (!validatePassword(password)) {
      newErrors.password =
        "Пароль должен содержать минимум 8 символов, хотя бы одну букву и одну цифру и с большой буквы";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      alert("Данные сохранены!");

      setEmail("");
      setPassword("");
    }
  };
  return (
    <MainSignInDiv>
      <ContentSection>
        <h1>Вход</h1>
        <Forma onSubmit={handleSubmit}>
          <FormTag>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              placeholder="Введите e-mail"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
            <Valid>{errors.email && <ErrorText>{errors.email}</ErrorText>}</Valid>
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
            <Valid>
              {errors.password && <ErrorText>{errors.password}</ErrorText>}
            </Valid>
          </FormTag>
          <Bbutton type="submit">Войти</Bbutton>
        </Forma>

        <TextDiv>
          <p>или</p>
          <a href="#">зарегистрироваться</a>
          <ATag href="#">Забыли пароль?</ATag>
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
const Bbutton = styled.button`
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
const ATag = styled.a`
  font-weight: bold;
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
const Forma = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin: 5px;
`;
const Valid=styled.div`
  width:auto;
  height:15px;
  padding-bottom:5px;
`