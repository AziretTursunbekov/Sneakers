import React, { useState } from "react";
import styled from "styled-components";
import llogo from "../../assets/icons/LogoHeader.svg";
import basked from "../../assets/icons/Vector.svg";
import like from "../../assets/icons/Heart.svg";
import person from "../../assets/icons/Man.svg";
import Button from "../../components/UI/button/Button";
import Modal from "../../components/UI/modal/Modal";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthProvider";
import { style } from "framer-motion/client";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { signOut } = useAuth();
  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  const title = "SNEAKERS".split("");
  return (
    <MainHeaderDiv>
      <NavTag>
        <img src={llogo} alt="this is loggo" />
        <a href="#">Woman</a>
        <a href="#">Man</a>
        <a href="#">Kids</a>
        <a href="#">Classic</a>
        <a href="#">Sport</a>
        <a href="#">Sale</a>
      </NavTag>
      <Logo>
        {title.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: index * 0.2,
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </Logo>
      <DivButtons>
        <StyledButton>
          <ImgTag src={like} alt="" />
        </StyledButton>
        <StyledButton>
          <ImgTag src={basked} alt="" />
        </StyledButton>
        <StyledButton
          onClick={() => setIsOpen(toggleModal)}
          style={{ margin: "0px" }}
        >
          <ImgTag src={person} alt="person" />
          <Modal open={isOpen} onClose={() => setIsOpen(toggleModal)}>
            <BtnStyle onClick={signOut}>sign out</BtnStyle>
          </Modal>
        </StyledButton>
      </DivButtons>
    </MainHeaderDiv>
  );
};
const MainHeaderDiv = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
  background-color: transparent;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  position: fixed;
  z-index: 1000;
`;
const ImgTag = styled.img`
  width: 20px;
  height: 20px;
`;
const NavTag = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  a {
    text-decoration: none;
    color: black;
    font-size: 17px;
  }
`;
const Logo = styled.section`
  margin-right: 230px;
  font-size: 35px;
  font-weight: bold;
  display: flex;
  gap: 5px;
  span {
    display: inline-block;
    color: #4a4c6c;
    font-size: 40px;
  }
`;
const DivButtons = styled.div`
  display: flex;
  gap: 30px;
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
const StyledButton = styled(Button)`
  width: 15px;
  height: 15px;
`;
const BtnStyle = styled.div`
  border: none;
`;
