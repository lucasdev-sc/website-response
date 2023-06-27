import React from "react";
import { CardsData } from "./CardsData";

import Img from "../../images/img-9.jpg";
import Img2 from "../../images/img-2.jpg";
import Img3 from "../../images/img-3.jpg";
import Img4 from "../../images/img-4.jpg";
import Img8 from "../../images/img-8.jpg";

import {
  Container,
  Title,
  CardsContainer,
  CardsWrapper,
  CardsItems,
} from "./styles";

export const Cards = () => {
  return (
    <Container>
      <Title>Check out these EPIC Destinations!</Title>
      <CardsContainer>
        <CardsWrapper>
          <CardsItems>
            <CardsData
              src={Img}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardsData
              src={Img2}
              text="Travel through the Island of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </CardsItems>
          <CardsItems>
            <CardsData
              src={Img3}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardsData
              src={Img4}
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardsData
              src={Img8}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </CardsItems>
        </CardsWrapper>
      </CardsContainer>
    </Container>
  );
};
