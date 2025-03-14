import { imageKrossMap, imageKross } from "../utils/constans";
import { Icons } from "../assets";
import { useState } from "react";
import { useCart } from "../context/CardContext";
import Button from "../components/UI/button/Button";
import styled from "styled-components";

export default function ImageKross() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [counter, setCounter] = useState(4);
  const { state, addToFavorite } = useCart();
  const { cart, addToCart } = useCart();

  const itemsPerPage = counter;
  const handleClickShop = () => {
    setCounter(function (prev) {
      return prev, 8;
    });
  };
  const handleClick = () => {
    setCounter(function (prev) {
      return prev, 4;
    });
  };
  const handleNext = () => {
    if (currentIndex + itemsPerPage < imageKrossMap.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <>
      <StyledContain>
        <div
          style={{
            width: "81%",
            display: "flex",
            flexDirection: "column",
            gap: "50px",
          }}
        >
          <div>
            <div style={{ display: "flex" }}>
              <Button
                style={{
                  backgroundColor: "#4A4C6C",
                  borderRadius: "100px",
                  width: "215px",
                  height: "57px",
                  border: "4px solid #7C7EA1",
                  fontSize: "20px",
                  color: "white",
                  marginRight: "40px",
                }}
              >
                NEW ARRIVALS
              </Button>
              <Button
                style={{
                  backgroundColor: "#77794E",
                  borderRadius: "100px",
                  width: "215px",
                  height: "57px",
                  border: "4px solid #9FA16D",
                  fontSize: "20px",
                  color: "white",
                }}
              >
                WHAT’S TRENDING
              </Button>
            </div>
            <StdMiniContain>
              {imageKrossMap.map((item) => (
                <StdMiniCard key={item.id}>
                  <StayleHeart onClick={() => addToFavorite(item)}>
                    {state.some((cartItem) => cartItem.id === item.id) ? (
                      <Icons.Frame />
                    ) : (
                      <Icons.Heart />
                    )}
                  </StayleHeart>
                  <StdImage src={item.image} />
                  <StBtn onClick={() => addToCart(item)}>
                    {cart.some((cartItem) => cartItem.id === item.id)
                      ? "Delete From Cart"
                      : "Add To Card"}
                  </StBtn>
                  <StdTitle>{item.name} </StdTitle>
                  <StdPrice2>
                    <span style={{ color: item.oldPrice ? "red" : "black" }}>
                      ${item.price}
                      {"   "}
                    </span>
                    <StdOldPrice>{item.oldPrice}</StdOldPrice>
                  </StdPrice2>
                  <StayleDivStdStars>
                    <StdStars src={item.rating} />
                    <StdPrice>({item.reviews})</StdPrice>
                  </StayleDivStdStars>
                </StdMiniCard>
              ))}
            </StdMiniContain>
          </div>
          <hr />
          <div>
            <SliderControls>
              <StyleSELLING>
                BEST <span style={{ color: "black" }}>SELL</span>ING
              </StyleSELLING>
              <div style={{ display: "flex" }}>
                <PrevButton onClick={handlePrev}>
                  <Icons.ArrowL />
                  <span style={{ paddingLeft: "30px" }}>Prev</span>
                </PrevButton>
                <NextButton onClick={handleNext}>
                  <Icons.ArrowR />
                  <span>Next</span>
                </NextButton>
              </div>
            </SliderControls>
            <div style={{ display: "flex" }}>
              <StyleOpen onClick={handleClickShop}>
                <StyleOpenSpan>open &#11014;</StyleOpenSpan>
              </StyleOpen>
              <StyleHidden onClick={handleClick}>
                <StyleHiddenSpan>hide &#11015;</StyleHiddenSpan>
              </StyleHidden>
            </div>
            <StdMiniContain>
              {imageKross
                .slice(currentIndex, currentIndex + itemsPerPage)
                .map((item) => (
                  <StdMiniCard key={item.id}>
                    <StayleHeart onClick={() => addToFavorite(item)}>
                      {state.some((cartItem) => cartItem.id === item.id) ? (
                        <Icons.Frame />
                      ) : (
                        <Icons.Heart />
                      )}
                    </StayleHeart>
                    <StdImage src={item.image} />
                    <StBtn onClick={() => addToCart(item)}>
                      {cart.some((cartItem) => cartItem.id === item.id)
                        ? "Delete From Cart"
                        : "Add To Card"}
                    </StBtn>
                    <StdTitle>{item.name} </StdTitle>
                    <StdPrice2>
                      <span style={{ color: item.oldPrice ? "red" : "black" }}>
                        ${item.price}
                        {"    "}
                      </span>
                      <StdOldPrice>{item.oldPrice}</StdOldPrice>
                    </StdPrice2>
                    <StayleDivStdStars>
                      <StdStars src={item.rating} />
                      <StdPrice>({item.reviews})</StdPrice>
                    </StayleDivStdStars>
                  </StdMiniCard>
                ))}
            </StdMiniContain>
          </div>
        </div>
      </StyledContain>
    </>
  );
}
const StyleSELLING = styled.h1`
  font-size: 48px;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;
  font-family: "Geist", sans-serif;
  color: white;
  &::before {
    content: "BEST SELLING";
    position: absolute;
    top: 0;
    left: 0;
    color: transparent;
    -webkit-text-stroke: 2px black;
  }
`;

const StyleHiddenSpan = styled.span`
  font-size: 2rem;
`;
const StyleOpenSpan = styled.span`
  font-size: 2rem;
`;
const StyleOpen = styled.button`
  background-color: #00000000;
  border: 1px solid black;
  border-radius: 12px;
  cursor: pointer;
  margin-right: 10px;
  display: flex;
  align-items: center;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Geist", sans-serif;
  font-size: 29.5px;
`;
const StyleHidden = styled.button`
  background-color: #00000000;
  border: 1px solid black;
  border-radius: 12px;
  cursor: pointer;
  margin-right: 10px;
  display: flex;
  align-items: center;
  font-weight: 700;
  text-transform: uppercase;

  font-family: "Geist", sans-serif;
  font-size: 30px;
`;

const StayleHeart = styled.div`
  position: absolute;
  top: 11px;
  right: 0px;
  display: flex;
  justify-content: end;
  margin-right: 20px;
  cursor: pointer;
`;

const StayleDivStdStars = styled.div`
  display: flex;
  position: relative;
`;

const StdPrice2 = styled.p`
  font-size: 12;
  color: #484a4c72;
`;

const StyledContain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Geist", sans-serif;
  margin-bottom: 50px;
`;

const StdMiniContain = styled.div`
  width: 100%;
  display: flex;
  margin-top: 40px;
  gap: 50px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const StdImage = styled.img`
  width: 270px;
  height: 250px;
  object-fit: contain;
  background-color: #efefefbb;
`;

const StdTitle = styled.h1`
  font-size: 16px;
  font-weight: 500;
  font-family: "Geist", sans-serif;
`;

const StdPrice = styled.p`
  font-family: "Geist", sans-serif;
  font-size: 12;
  color: #484a4c72;
  position: relative;
  right: 30px;
`;
const StdMiniCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 350px;
  justify-content: flex-start;
  gap: 10px;
  position: relative;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }
`;
const StBtn = styled.button`
  width: 270px;
  height: 41px;
  position: absolute;
  top: 209px;
  left: 0;
  background-color: black;
  color: white;
  justify-content: center;
  align-items: center;
  display: none;
  transition: display 0.3s ease;
  cursor: pointer;
  &:hover & {
    width: 270px;
    height: 41px;
    background-color: #333;
    color: white;
    display: flex;
    animation-duration: 0.5s;
    animation-fill-mode: both;
  }
  ${StdMiniCard}:hover & {
    display: flex;
  }
`;

const StdOldPrice = styled.span`
  text-decoration: line-through;
  color: #484a4c72;
`;

const StdStars = styled.img`
  width: 140px;
  height: 20px;
  padding-right: 40px;
`;

const SliderControls = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const PrevButton = styled.button`
  background-color: #00000000;
  display: flex;
  flex-direction: column-reverse;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const NextButton = styled.button`
  display: flex;
  flex-direction: column-reverse;
  background-color: #00000000;
  border: none;
  padding: 10px;
  cursor: pointer;
`;
