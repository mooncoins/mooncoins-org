import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import { ParticlesHero } from "./ParticlesHero";
import { stripPathPrefixes } from "@util/image";
import { useTheme } from "@mui/material/styles";
import { badgeUnstyledClasses } from "@mui/base";

const Hero = ({
  imgFileName,
  imgAlt,
  imgOpacity,
  title,
  subtitle,
  particles,
}) => {
  const theme = useTheme();

  // clean here for use later
  const cleanedImgFileName = stripPathPrefixes(
    imgFileName || "hawaii-beauty.jpg"
  );

  return (
    <>
      <Grid
        component="section"
        container
        sx={{
          position: `relative`,
          height: "100vh",
          width: "100%",
          overflow: `hidden`,
          zIndex: -100,
          mb: 15,
        }}
      >
        {particles ? (
          <ParticlesHero />
        ) : (
          <img
            src={require(`/public/img/${cleanedImgFileName}`)}
            alt={imgAlt}
            height="100%"
            width="100%"
            style={{ objectFit: "cover" }}
          />
        )}
        <Grid
          container
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: `rgba(0,0,0, ${imgOpacity})`,
          }}
        >
          <Grid
            container
            item
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="h1"
              align="center"
              gutterBottom
              sx={{
                color:
                  theme.palette.mode === "light"
                    ? "secondary.main"
                    : "primary.main",
                fontWeight: 400,
              }}
            >
              {title}
            </Typography>
            <Typography
              component="p"
              variant="h3"
              align="center"
              color="common.white"
              sx={{
                mb: 10,
              }}
            >
              {subtitle}
            </Typography>
            <Typography
              component="p"
              variant="h6"
              color={theme.palette.mode === "light" ? "secondary" : "primary"}
              gutterBottom
            >
              Scroll
            </Typography>
            <ArrowDownward
              fontSize="large"
              color={theme.palette.mode === "light" ? "secondary" : "primary"}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Hero;
