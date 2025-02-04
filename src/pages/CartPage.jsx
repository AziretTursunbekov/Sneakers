import React from "react";
import { useCart } from "../context/CardContext";
import styled, { keyframes } from "styled-components";
import { Icons } from "../assets";
import Button from "../components/UI/button/Button";

export default function CartPage() {
  const { state, cart, addToCart, addToFavorite } = useCart();

  const totalSum = cart.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return (
    <>
      {cart.length === 0 ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <h1>Ваша корзина пуста</h1>
        </div>
      ) : (
        <>
          <StyledContain>
            <div style={{ width: "100%" }}>
              <StdMiniContain>
                {cart.map((item) => (
                  <StdMiniCard key={item.id}>
                    <StayleHeart onClick={() => addToFavorite(item)}>
                      {state.some((cartItem) => cartItem.id === item.id) ? (
                        <Icons.Frame />
                      ) : (
                        <Icons.Heart />
                      )}
                    </StayleHeart>
                    <StdImage src={item.image} />
                    <StdBtnCard
                      onClick={() => addToCart(item)}
                      variant={"contained"}
                    >
                      Delete From Cart
                    </StdBtnCard>
                    <StdTitle>{item.name}</StdTitle>
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
          </StyledContain>
          <StyleTitalDiv>
            <StyleTotal>
              <span>Total:</span>
              <span>${totalSum}</span>
            </StyleTotal>
            <Button> Заказать </Button>
          </StyleTitalDiv>
        </>
      )}
    </>
  );
}
const StyleTitalDiv = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding-right: 20px;
  Button {
    width: 270px;
    font-size: 36px;
    border-radius: 20px;
    background-color: #000000c6;
    color: white;
    padding: 0;
  }
`;
const StyleTotal = styled.p`
  font-size: 36px;
  width: 270px;
  display: flex;
  justify-content: space-between;
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
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 50%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
const StdBtnCard = styled(Button)`
  width: 270px;
  height: 41px;
  position: absolute;
  top: 209px;
  left: 0;
  justify-content: center;
  align-items: center;
  display: none;
  transition: display 0.3s ease;
  &:hover & {
    width: 270px;
    height: 41px;
    background-color: #333;
    display: flex;
    animation-name: ${fadeInUp};
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
