import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I am from Ecuador, my native language is Spanish but I have English
        proficiency (C1 TOEFL). I&apos;m currently in my last year of IT
        engineering at{" "}
        <a
          href="https://www.yachaytech.edu.ec/mtics/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#FB8500" }}
        >
          Yachay Tech University
        </a>
        . Through my career I have gained experience on solving problems,
        working in teams, and of course many programming languages, even
        developing my own programming language. I also worked with artificial
        intelligence, in this field I presented my work at the{" "}
        <a
          href="https://www.resurchify.com/ed/ideal-2020-21th-international-conference-on-intelligent/7613"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#FB8500" }}
        >
          21th International Conference on Intelligent Data Engineering and
          Automated Learning (IDEAL 2020).
        </a>{" "}
        This work was published in{" "}
        <a
          href="https://link.springer.com/chapter/10.1007/978-3-030-62365-4_19"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#FB8500" }}
        >
          Lecture Notes in Computer Science.
        </a>{" "}
        <br />
        My journey in the web development starts in 2020, learning about the
        technologies and realising the gap that exists between what the
        University teaches and what the real world is asking for. I started to
        learn by myself all the modern technologies and forming study groups
        with my colleages. Nowadays, in my free time I am a volunteer leading
        the development of a medical platform using FastAPI and NextJS as the
        base technologies. <br />
        Despite all the knowledge I gained through these years, I&apos;m sure I
        still need to keep learning and this is just the beggining of my
        journey.
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map(({ year, text }, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {year}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fillOpacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop
                          offset="0.79478"
                          stopColor="white"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
          >
            <CarouselButtonDot />
          </CarouselButton>
        ))}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
