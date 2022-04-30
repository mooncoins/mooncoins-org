import { Box } from "@mui/material";
import Image from "next/image";

export const SectionImage = ({ src, alt, opacity }) => {
  return (
    <Box
      component="section"
      container
      sx={{
        position: "relative",
        width: "100%",
        height: "60vh",
        overflow: "hidden",
        zIndex: -100,
      }}
    >
      <Image
        src={src || "/img/fusion-food.jpg"}
        alt={alt || "Your image here"}
        layout="fill"
        objectFit="cover"
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: `rgba(0,0,0,${opacity})`,
        }}
      />
    </Box>
  );
};
