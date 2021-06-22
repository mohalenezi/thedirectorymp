import React from "react";
import { NavLinkStyled, logo } from "../style";

function NavBar() {
  return (
    <div>
      {/* <logo to="/">
        <img
          alt="HomeLogo"
          src="https://cdn1.vectorstock.com/i/1000x1000/34/50/movie-logo-vector-19783450.jpg"
          width="500"
        />
      </logo> */}
      <NavLinkStyled to="/movies">Movies</NavLinkStyled>
    </div>
  );
}

export default NavBar;
