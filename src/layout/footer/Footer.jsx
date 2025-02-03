import React from "react";
import styled from "styled-components";
import face from "../../assets/icons/Facebook.svg";
import inst from "../../assets/icons/Instagram.svg";
import iconss from "../../assets/icons/VectorX.svg";
import vectorin from "../../assets/icons/VectorIn.svg";
import you from "../../assets/icons/VectorYouTube.svg";

const Footer = () => {
  return (
    <MainFooter>
      <SectionAbout>
        <TextDiv>
          <h1>Logo</h1>
          <Adress>
            <h4>Address:</h4>
            <p>USA, California</p>
          </Adress>
          <Contact>
            <h4>Contact:</h4>
            <a href="#">1800 123 4567</a>
            <a href="#">javaria.y2b@gmail.com</a>
          </Contact>
          <Icons>
            <img src={face} alt="" />
            <img src={inst} alt="" />
            <img src={iconss} alt="" />
            <img src={vectorin} alt="" />
            <img src={you} alt="" />
          </Icons>
        </TextDiv>

        <LinkDiv>
          <FirstColumn>
            <a href="#">Link one</a>
            <a href="#">Link two</a>
            <a href="#">Link three</a>
            <a href="#">Link four</a>
            <a href="#">Link five</a>
          </FirstColumn>
          <FirstColumn>
            <a href="#">Link one</a>
            <a href="#">Link two</a>
            <a href="#">Link three</a>
            <a href="#">Link four</a>
            <a href="#">Link five</a>
          </FirstColumn>
          <FirstColumn>
            <a href="#">Link Six</a>
            <a href="#">Link Seven</a>
            <a href="#">Link Eight</a>
            <a href="#">Link Nine</a>
            <a href="#">Link Ten</a>
          </FirstColumn>
        </LinkDiv>
      </SectionAbout>
      <Linia></Linia>
      <h4>© 2023 Javaria. All rights reserved.</h4>
    </MainFooter>
  );
};

export default Footer;

const MainFooter = styled.div`
  width: 100%;
  height: auto;
  background-color: #333333;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 58px;
  padding-bottom: 50px;
  padding-left: 144px;
  padding-right: 144px;
  gap: 43px;
  h4 {
    font-weight: 400;
    font-size: 15px;
    color: #ffffff;
  }
`;
const Icons=styled.div`
  display:flex;
  gap:15px;
`
const SectionAbout = styled.section`
  width: 1281px;
  height: 259px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  h1 {
    font-size: 27px;
  }
`;
const Adress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  p {
    font-weight: lighter;
    font-style: solid;
  }
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  a {
    color: white;
    font-style: solid;
  }
`;
const LinkDiv = styled.div`
  width: 360px;
  height: 153px;
  display: flex;
  gap: 69px;
`;
const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  a {
    color: white;
    text-decoration: none;
    font-size: 16px;
  }
`;
const Linia = styled.div`
  width: 100%;
  height: 2px;
  background-color: white;
`;
