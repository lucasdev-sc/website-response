import React from "react";
import { Button } from "../Button";

import { HeroContainer, Video, HeroH1, HeroP, HeroButtons } from "./styles";
import Film from '../../videos/video-2.mp4'
import { AiFillPlayCircle } from "react-icons/ai";

export const HeroSection = () => {
  return (
    <HeroContainer>
      <Video src={Film} autoPlay loop muted />
      <HeroH1>ADVENTURE AWAITS</HeroH1>
      <HeroP>What are you waiting for?</HeroP>
      <HeroButtons>
        <Button buttonStyle={false} buttonSize={false}>
          GET STARTED
        </Button>
        <Button buttonStyle={true} buttonSize={false}>
          WATCH TRAILER <AiFillPlayCircle />
        </Button>
      </HeroButtons>
    </HeroContainer>
  );
};
