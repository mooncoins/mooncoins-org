import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Rating,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";

export const ReviewCard = ({ name, rating, quote }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          name && typeof name === "string" ? (
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label={`${name} profile letter`}
            >
              {name.substring(0, 2).toUpperCase()}
            </Avatar>
          ) : (
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label={`Empty profile letter`}
            >
              NA
            </Avatar>
          )
        }
        title={name || "Name Here"}
      />
      <CardContent>
        {rating && <Rating value={rating} precision={0.5} readOnly />}
        <Typography variant="body2" color="text.secondary">
          {quote || "Your quote here"}
        </Typography>
      </CardContent>
    </Card>
  );
};
