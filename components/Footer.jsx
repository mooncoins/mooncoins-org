import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import MuiNextLink from "@components/MuiNextLink";
import { useTheme } from "@mui/material/styles";

import { attributes as footerContent } from "@content/footer.md";

export const Footer = () => {
  const theme = useTheme();
  const { socialMedia, copyright } = footerContent || {};
  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        bgcolor:
          theme.palette.mode === "light" ? "primary.main" : "primary.dark",
      }}
    >
      {socialMedia && Array.isArray(socialMedia) && (
        <Stack
          direction="row"
          justifyContent="center"
          spacing={4}
          sx={{ mb: 5 }}
        >
          {socialMedia.map(({ type, link }, index) => (
            <MuiNextLink
              key={`${index}-${type}`}
              sx={{ textDecoration: "none", color: "common.white" }}
              href={link || "/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              {type === "facebook" && <Facebook fontSize="large" />}
              {type === "instagram" && <Instagram fontSize="large" />}
              {type === "twitter" && <Twitter fontSize="large" />}
              {type === "linkedIn" && <LinkedIn fontSize="large" />}
            </MuiNextLink>
          ))}
        </Stack>
      )}
      {copyright && (
        <Typography align="center" color="common.white">
          © {copyright.year} - {new Date().getFullYear()}, {copyright.entity}
        </Typography>
      )}
    </Box>
  );
};
