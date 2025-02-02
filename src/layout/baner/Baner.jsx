import styled from "styled-components";
import photoOne from "../../assets/image/Kids.png";
import photoTwo from "../../assets/image/Women.png";
import photoThree from "../../assets/image/SneakersImg.png";
import photos from "../../assets/image/Boots.png";
import photos5 from "../../assets/image/Man.png";
import React from "react";

export const Baner = () => {
  return (
    <DivMain>
      <DivOne>
        <button>KIDS</button>
      </DivOne>
      <SecondDiv>
        <DivTwo>
          <button>WOMEN</button>
        </DivTwo>

        <DivThree>
          <button>SNEAKERS</button>
        </DivThree>
      </SecondDiv>
      <SecondDiv>
        <DivFour>
          <button>BOOTS</button>
        </DivFour>
        <DivFive>
          <button>MEN </button>
        </DivFive>
      </SecondDiv>
    </DivMain>
  );
};

const DivMain = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 5px;
  flex-direction: column;
`;

const SecondDiv = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
`;

const DivOne = styled.div`
  width: 100%;
  height: 495px;
  background-image: url(${photoOne});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 60px;

  button {
    width: 99px;
    height: 54px;
    background-color: black;
    border: none;
    color: white;
  }
`;

const DivTwo = styled.div`
  width: 885px;
  height: 542px;
  background-image: url(${photoTwo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 60px;

  button {
    width: 99px;
    height: 54px;
    background-color: black;
    border: none;
    color: white;
  }
`;

const DivThree = styled.div`
  width: 669px;
  height: 542px;
  background-image: url(${photoThree});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 60px;

  button {
    width: 99px;
    height: 54px;
    background-color: black;
    border: none;
    color: white;
  }
`;

const DivFour = styled.div`
  width: 549px;
  height: 542px;
  background-image: url(${photos});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 60px;

  button {
    width: 99px;
    height: 54px;
    background-color: white;
    border: none;
    color: black;
  }
`;

const DivFive = styled.div`
  width: 985px;
  height: 542px;
  background-image: url(${photos5});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 60px;

  button {
    width: 99px;
    height: 54px;
    background-color: white;
    border: none;
    color: black;
  }
`;
