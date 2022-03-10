import React from "react";
import Link from "next/link";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { NavLink } from "../Header/HeaderStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! Welcome to <br />
        My Personal Website
      </SectionTitle>
      <SectionText>
        My name is Robinson Paspuel, I&apos;m a junior developer looking for
        building a career as a software engineer. I&apos;m specialized in
        back-end development and databases. I also develop front-end for web
        applications.
        <br />
        Do you want to know about the technologies I use? Follow this{" "}
        <a href="#technologies" style={{ color: "#FB8500" }}>
          link
        </a>
        .
        <br />
        Or take a look at my entire CV in PDF format:
      </SectionText>{" "}
      <Button>
        {" "}
        <a
          href="robin_paspuel_cv.pdf"
          alt="cv pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          See CV PDF
        </a>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
