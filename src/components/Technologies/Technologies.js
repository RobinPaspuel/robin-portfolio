import React from "react";
import {
  DiDatabase,
  DiReact,
  DiTerminal,
  DiDart,
  DiGithubBadge,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="technologies">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      As a developer focused on back-end technologies I always try to stay up to
      date with all the new frameworks. The languages I use are mainly Python
      and JavaScript. I also have experience with front-end technologies.
    </SectionText>
    <List>
      <ListItem>
        <DiTerminal size="3rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with: <br />
            Serverless Framework <br />
            FastAPI <br />
            Django <br />
            Express.js <br />
            NestJS <br />
            Fastify 
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with: <br />
            PostgreSQL <br />
            MySQL <br />
            MongoDB <br />
            DynamoDB <br />
            Redis
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with: <br />
            React <br />
            NextJS <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGithubBadge size="3rem" />
        <ListContainer>
          <ListTitle>Other Technologies</ListTitle>
          <ListParagraph>
            Experience with: <br />
            Git / Github <br />
            Docker <br />
            AWS Lambda <br />
            TensorFlow <br />
            Linux 
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
