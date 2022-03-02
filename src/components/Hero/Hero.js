import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
        suscipit quam. Duis elementum aliquam neque in ultricies. Vivamus
        feugiat, odio condimentum consectetur posuere, erat massa pretium
        turpis, eget condimentum ante mi sed quam. Nullam porta rutrum nisi et
        mattis. Curabitur sapien augue, semper ut suscipit sit amet, consectetur
        id urna. Aliquam rhoncus mauris augue, quis convallis erat elementum
        sed. Fusce venenatis nulla ac odio porta semper. Curabitur quis odio
        tempus, mollis mauris vel, interdum arcu.
      </SectionText>
      <Button
        onClick={() => {
          window.location = "/";
        }}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
