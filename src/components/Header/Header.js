import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { DiCssdeck, DiTerminal } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <DiTerminal size="3rem" />
          <Span>Robin Paspuel</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      {/* <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li> */}
      <li>
        <Link href="#technologies">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <NavLink href="https://robinpaspuel.github.io/upptime" target="_blank">
          My Sites
        </NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://robinpaspuel.github.io/" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/robinson-paspuel/"
        target="_blank"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://wa.me/593988428289" target="_blank">
        <AiOutlineWhatsApp size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
