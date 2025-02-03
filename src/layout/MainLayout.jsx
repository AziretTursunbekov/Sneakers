import { RouteContext } from "../context/RouteContext";
import styled from "styled-components";
import SignIn from "../components/auth/SignIn";
import { Header } from "./header/Header";
import Footer from "./footer/Footer";
import MainPage from "../pages/MainPage";
import FavoritePage from "../pages/FavoritePage";
import CartPage from "../pages/CartPage";
import { useContext } from "react";

export const MainLayout = () => {
  const { path } = useContext(RouteContext);
  let content;

  switch (path) {
    case "sign-in":
      {
        content = <SignIn />;
      }
      console.log("sign");

      break;
    case "/":
      {
        content = <MainPage />;
      }
      break;
    case "favorite":
      {
        content = <FavoritePage />;
      }
      break;
    case "cart": {
      content = <CartPage />;
    }
  }

  return (
    <StyledLayout>
      <Header />
      <Content>{content}</Content>
      <Footer />
    </StyledLayout>
  );
};

const Content = styled.div`
  margin-top: 90px;
`;
const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
