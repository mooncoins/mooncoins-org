import { Container, Grid, Typography } from "@mui/material";
import { ReviewCard } from "./ReviewCard";

export const SectionReview = ({ title, reviews }) => {
  return (
    <Container maxWidth="md" sx={{ my: 15 }}>
      <Typography variant="h2" textAlign="center" sx={{ mb: 10 }}>
        {title}
      </Typography>
      {reviews && Array.isArray(reviews) && (
        <Grid container spacing={2}>
          {reviews.map((review, index) => (
            <Grid
              key={`${index}-${review?.name}`}
              container
              item
              justifyContent="center"
              xs={12}
              sm={6}
              md={4}
            >
              <ReviewCard {...review} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};
