import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import MuiNextLink from "@components/MuiNextLink";
import Button from "@mui/material/Button";

export const SectionAction = ({ title, description, button, image }) => {
  return (
    <Container component="section" maxWidth="md" sx={{ mb: 15 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <img
            src={require(`/public/img/${image?.fileName || "moon-launch.svg"}`)}
            alt={image?.alt || "Your image here"}
            layout="responsive"
            width="100%"
            height="auto"
          />
          {!image?.fileName && (
            <Typography
              component="h2"
              variant="h4"
              textAlign="center"
              gutterBottom
            >
              Your Image Here
            </Typography>
          )}
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            component="h2"
            variant="h4"
            textAlign="center"
            gutterBottom
          >
            {title || "Your title here"}
          </Typography>
          <Typography textAlign="center" sx={{ mb: 5 }}>
            {description || "Your description here"}
          </Typography>
          <MuiNextLink
            href={button?.link || "/page-not-found"}
            underline="none"
          >
            <Button variant="outlined" size="large">
              {button?.text || "Your Action Here"}
            </Button>
          </MuiNextLink>
        </Grid>
      </Grid>
    </Container>
  );
};
