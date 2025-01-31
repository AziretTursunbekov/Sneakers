import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { images } from "../../../utils/constans";
export default function Slider() {
  const [state, setState] = useState(0);

  const nextImage = () => {
    setState((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SliderContainer>
      <Image src={images[state]} alt="" />
      <StyleImageShop src="src/assets/image/SHOP ALL.png" alt="" />
    </SliderContainer>
  );
}
const StyleImageShop = styled.img`
  position: absolute;
`;
const SliderContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Image = styled.img`
  width: 300p;
  height: 100vh;
  border-radius: 8px;
  transition: opacity 1s ease;
  z-index: 10;
  animation-name: slider;
  animation-iteration-count: infinite;
  animation-duration: 4s;
  @keyframes slider {
    0% {
      transform: translateX(-100vw);
    }
    50% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100vw);
    }
  }
`;
