import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
box-sizing: border-box;
body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.mainColor};
    
}
P {
    font-style: italic;
}
`;

export const Navstyled = styled.nav`
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const logo = styled(Link)`
  padding: 0.75em;
  margin: 10px;
  margin-bottom: 30px;
  font-size: 70px;

  img {
    width: 8rem;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  margin: 10px;
  margin-bottom: 30px;
  font-size: 70px;

  &.active {
    color: ${(props) => props.theme.red};
  }
`;

export const Title = styled.h1`
  text-align: center;
  p {
    background-color: #282c34;
    min-height: 10vh;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 6vmin);
    color: white;
  }
`;

export const Description = styled.h3`
  text-align: center;
  font-size: 40px;
`;

export const HomeImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MovieWrapper = styled.div`
  box-sizing: border-box;
  display: grid-table;
  grid-gap: 100px 100px;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;

  padding: 10px;
  background: radial-gradient(grey, #282c34);
  align-items: center;
  justify-content: center;
  float: center;

  p {
    text-align: center;
    color: red;
    font-size: 30px;
  }
`;

export const DetailWrapper = styled.div`
  width: 100%;
  img {
    border: 15px solid black;
    margin: 30px;
    width: 200px;
    height: 300px;
  }

  p {
    vertical-align: middle;
    font-size: 30px;
  }
`;
