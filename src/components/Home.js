import React from "react";
import { Title, Description, HomeImage } from "../style";

const Home = () => {
  return (
    <div>
      <Title>
        <p>The Movie Library</p>
      </Title>
      <Description>Bring the popcorn, Enjoy watching</Description>
      <HomeImage
        alt="HomeLibrary"
        src="https://as2.ftcdn.net/jpg/01/91/24/21/500_F_191242154_CM3YTCVYijPi3bmJypxyUUUMF0AhL0PN.jpg"
      />
    </div>
  );
};

export default Home;
