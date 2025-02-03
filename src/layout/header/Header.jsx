import React, { useContext, useState } from "react";
import styled from "styled-components";
import llogo from "../../assets/icons/LogoHeader.svg";
import basked from "../../assets/icons/Vector.svg";
import like from "../../assets/icons/Heart.svg";
import person from "../../assets/icons/Man.svg";
import { motion } from "framer-motion";
import { RouteContext } from "../../context/RouteContext";
import { useCart } from "../../context/CardContext";
import Button from "../../components/UI/button/Button";
import { useAuth } from "../../context/AuthContext";
import Modal from "../../components/UI/modal/Modal";

export const Header = () => {
  const title = "SNEAKERS".split("");
  const { onPathChange } = useContext(RouteContext);
  const { state, cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const { signOut } = useAuth();
  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <MainHeaderDiv>
      <NavTag>
        <img
          onClick={() => onPathChange("/")}
          src={llogo}
          alt="this is loggo"
          style={{ cursor: "pointer" }}
        />
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
        <StyledBTN
          variant={"outlined"}
          onClick={() => onPathChange("favorite")}
        >
          {state.length < 0 && null}
          {state.length > 0 && <Staylelength>{state.length}</Staylelength>}
          <ImgTag src={like} alt="" />
        </StyledBTN>
        <StyledBTN variant={"outlined"} onClick={() => onPathChange("cart")}>
          {cart.length < 0 && null}
          {cart.length > 0 && <Staylelength>{cart.length}</Staylelength>}

          <ImgTag src={basked} alt="" />
        </StyledBTN>
        <StyledBTN variant={"outlined"} onClick={() => setIsOpen(toggleModal)}>
          <ImgTag src={person} alt="" />
          <Modal open={isOpen} onClose={() => setIsOpen(toggleModal)}>
            <button onClick={signOut}>sign out</button>
          </Modal>
        </StyledBTN>
      </DivButtons>
    </MainHeaderDiv>
  );
};
const Staylelength = styled.span`
  position: absolute;
  left: 13px;
  bottom: 5px;
  z-index: 1;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 0px 4px;
`;
const MainHeaderDiv = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  top: 0;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
  background-color: white;
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
  align-items: center;
  justify-content: center;
  gap: 40px;
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
const StyledBTN = styled(Button)`
  position: relative;
  width: 40px;
  height: 20px;
  display: flex;
`;
