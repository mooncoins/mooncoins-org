import { Container, Grid, Typography } from "@mui/material";
import { NavigationCard } from "@components/NavigationCard";

export const SectionNavigation = ({
  title = "",
  description = "",
  pathways = [],
}) => {
  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h2" textAlign="center" sx={{ mt: 10 }}>
          {title}
        </Typography>
        <Typography textAlign="center" sx={{ mb: 10 }}>
          {description}
        </Typography>
      </Container>
      {pathways && Array.isArray(pathways) && (
        <Container maxWidth="md" sx={{ my: 15 }}>
          <Grid container spacing={2}>
            {pathways.map((navItem, index) => (
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
