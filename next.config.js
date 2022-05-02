const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

// see github pages template and netlify template for webpack
const debug = process.env.NODE_ENV !== "production";
const nextConfig = {
  reactStrictMode: true,
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    return cfg;
  },
  images: { disableStaticImages: true },
};

// see https://github.com/cyrilwanner/next-optimized-images for image optimization config
// see https://www.npmjs.com/package/next-compose-plugins for withPlugins syntax
module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        /* config for next-optimized-images, 
        see https://github.com/cyrilwanner/next-optimized-images#configuration */
        optimizeImagesInDev: true,
        imagesFolder: "img",
      },
    ],

    // future other plugins here
  ],
  nextConfig
);
