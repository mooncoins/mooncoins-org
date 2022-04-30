const debug = process.env.NODE_ENV !== "production";
// see github pages template and netlify template for webpack
// use https://github.com/cyrilwanner/next-optimized-images when ready, for now us akamai and path at root for image loading
module.exports = {
  reactStrictMode: true,
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    return cfg;
  },
  assetPrefix: !debug ? "/notes/" : "",
  images: { loader: "akamai", path: "/" },
};
