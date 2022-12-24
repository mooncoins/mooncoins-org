import * as React from "react";
import Container from "@mui/material/Container";
import Hero from "@components/Hero";
import { SectionAction } from "@components/SectionAction";
import { SectionImage } from "@components/SectionImage";
import { SectionReview } from "@components/SectionReview";
import { SectionNavigation } from "@components/SectionNavigation";
import { attributes as pageContent } from "@content/homepage.md";

const Homepage = () => {
  const { hero, sections, callToAction, imageBreaks, review, navigation } =
    pageContent || {};

  return (
    <>
      <Hero {...hero} />
      <SectionAction {...callToAction} />
      <SectionImage {...imageBreaks[0]} />
      <Container maxWidth="sm">
        {sections &&
          sections.map((section, index) => (
            <div key={index}>
              <h1>{section.header}</h1>
              <p>{section.text}</p>
            </div>
          ))}
      </Container>
      <SectionReview {...review} />
      <SectionImage {...imageBreaks[1]} />
      <SectionNavigation {...navigation} />
    </>
  );
};

export default Homepage;
