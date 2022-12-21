import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import MuiNextLink from "./MuiNextLink";

import { stripPathPrefixes } from "@util/image";

export const NavigationCard = ({
  imgFileName,
  imgAlt,
  title,
  description,
  buttonLink,
  buttonText,
}) => {
  // clean here for use later
  const cleanedImgFileName = stripPathPrefixes(
    imgFileName || "moon-launch.svg"
  );

  return (
    <Card sx={{ maxWidth: 480 }}>
      <CardMedia
        sx={{ height: 270 }}
        image={require(`/public/img/${cleanedImgFileName}`)}
        title={imgAlt}
      />
      <CardContent>
        <Typography component="h3" variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <MuiNextLink href={buttonLink} underline="none">
          <Button variant="contained" size="large">
            {buttonText}
          </Button>
        </MuiNextLink>
      </CardActions>
    </Card>
  );
};
