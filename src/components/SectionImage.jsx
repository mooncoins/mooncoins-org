import { Box } from "@mui/material";

export const SectionImage = ({ fileName, alt, opacity }) => {
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
        src={require(`/public/img/${fileName || "hawaii-beauty.jpg"}`)}
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
