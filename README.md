## Notes

1. Make sure to not change the naming convention for the public images folder, it has to be hardcoded as `/public/img/` for the prefix to make webpack work, see issue comment here: https://github.com/cyrilwanner/next-optimized-images/issues/141#issuecomment-623556804

2. If you want to add query parameters for `next-optimized-images`, you need to use `require.context`. See issue here: https://github.com/cyrilwanner/next-optimized-images/issues/16

3. Image path prefixes in the frontmatter are ignored. This is too allow ease of use via either direct commits or through the netlify image widget (which automatically adds the prefix, which has to be /basePath/img). Thus, `/basePath/img/image.svg`,`/img/image.svg`,`/anything/image.svg`, and `image.svg` all ultimately get processed into
   the same folder (i.e., the public images folder in `/public/img`).

4. The `parking page` branch displays while the site is being built. Ensure that any templates have this branch or they will not deploy correctly.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.