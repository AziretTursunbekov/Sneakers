import React from "react";
import { useCart } from "../context/CardContext";
import styled, { keyframes } from "styled-components";
import { Icons } from "../assets";
import Button from "../components/UI/button/Button";

export default function CartPage() {
  const { state, cart, addToCart, addToFavorite } = useCart();
  return (
    <>
      <StyledContain>
        <div style={{ width: "81%" }}>
          <StdMiniContain>
            {cart.length > 0 && (
              <>
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
              </>
            )}
          </StdMiniContain>
        </div>
      </StyledContain>
    </>
  );
}
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
