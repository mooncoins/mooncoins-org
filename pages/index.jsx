import * as React from "react";
import Container from "@mui/material/Container";
import Hero from "@components/Hero";
import { SectionAction } from "@components/SectionAction";
import { SectionImage } from "@components/SectionImage";
import { SectionReview } from "@components/SectionReview";
import { attributes as pageContent } from "../content/homepage.md";
import Grid from "@mui/material/Grid";
import { NavigationCard } from "@components/NavigationCard";

const Homepage = () => {
  const { hero, sections, callToAction, imageBreak, review, navigation } =
    pageContent || {};

  return (
    <>
      <Hero {...hero} />
      <SectionAction {...callToAction} />
      <SectionImage {...imageBreak} />
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
      <SectionImage {...imageBreak} />
      {navigation && Array.isArray(navigation) && (
        <Container maxWidth="md" sx={{ my: 15 }}>
          <Grid container spacing={2}>
            {navigation.map((navItem, index) => (
              <Grid
                key={`${index}-${navItem.title}`}
                container
                item
                justifyContent="center"
                xs={12}
                md={6}
              >
                <NavigationCard {...navItem} />
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Homepage;
