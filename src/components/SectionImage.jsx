import { Box } from "@mui/material";

import { stripPathPrefixes } from "@util/image";

export const SectionImage = ({ fileName, alt, opacity }) => {
  // clean here for use later
  const cleanedImgFileName = stripPathPrefixes(fileName || "hawaii-beauty.jpg");

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
      <img
        src={require(`/public/img/${cleanedImgFileName}`)}
        alt={alt || "Your image here"}
        width="100%"
        height="100%"
        style={{ objectFit: "cover" }}
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
