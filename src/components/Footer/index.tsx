import React from "react";
import { FaTypo3 } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { SocialIconsData } from "./SocialIconsData";

import {
  Container,
  FooterSubscription,
  FooterHeading,
  FooterText,
  FooterInputs,
  Form,
  Input,
  FooterLinks,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterH2,
  SocialMedia,
  SocialMediaWrap,
  FooterLogo,
  Rights,
  SocialIcons,
} from "./styles";

export const Footer = () => {
  return (
    <Container>
      <FooterSubscription>
        <FooterHeading>
          Join the Adventure newsletter to receive our best vacation deals
        </FooterHeading>
        <FooterText>You can unsubscribe ay any time.</FooterText>
        <FooterInputs>
          <Form>
            <Input type="email" name="email" placeholder="Your Email" />
            <Button buttonStyle={false} buttonSize={true}>
              Subscribe
            </Button>
          </Form>
        </FooterInputs>
      </FooterSubscription>

      <FooterLinks>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterH2>About Us</FooterH2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterH2>Contact Us</FooterH2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </FooterLinksItems>
        </FooterLinksWrapper>

        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterH2>Videos</FooterH2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterH2>Social Media</FooterH2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinks>

      <SocialMedia>
        <SocialMediaWrap>
          <FooterLogo>
            <Link to="/">
              TRVL <FaTypo3 />
            </Link>
          </FooterLogo>
        </SocialMediaWrap>
        <Rights>TRVL © 2020</Rights>
        <SocialIcons>
          {SocialIconsData.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.path}
                className={item.class}
                target={item.target}
                aria-label={item.label}
              >
                {item.icon}
              </Link>
            );
          })}
        </SocialIcons>
      </SocialMedia>
    </Container>
  );
};
