import { useRouter } from "next/router";
import { PageNotFound } from "@components/PageNotFound";

// read here to understand dynamic routes: https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details
// searches through the /content/info folder to find the md files
// assumes node working directory is the root repo directory
export async function getStaticPaths() {
  const contentFolder = "./content/info/";
  const fs = require("fs");

  const paths = fs.readdirSync(contentFolder).map((file) => {
    const endIndex = file.lastIndexOf(".md");
    const startIndex = file.lastIndexOf("/") + 1;

    // only catch .md files
    const pageName = endIndex > -1 ? file.substring(startIndex, endIndex) : "";
    return { params: { pageName } };
  });

  return {
    paths,
    fallback: false, // any paths not returned here get a 404
  };
}

// gets the individual object in the path list from getStaticPaths for each path
export async function getStaticProps({ params }) {
  const { pageName } = params;
  if (!pageName) {
    return {
      notFound: true,
    };
  }

  return {
    props: { pageName }, // will be passed to the page component as props
  };
}

// prop injected via getStaticProps
const InfoPage = ({ pageName }) => {
  // using getStaticPaths and getStaticProps instead of useRouter since headless CMS
  // see here for more info: https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
  // if you decide to use useRouter hook instead, remember that next.js optimizes via automatic static optimization,
  // so need to have a failsafe initialization while pageName is undefined.
  // next will inject router.query after page hydration
  // see bottom of here for details: https://nextjs.org/docs/routing/dynamic-routes

  let contentImport = {};

  if (pageName) {
    // handle the case where someone visits /info, gets routed here appropriately (probably
    // if we messed up getStaticPaths somehow), but the page doesn't exist
    try {
      contentImport = require(`/content/info/${pageName}.md`);
    } catch (err) {
      contentImport = { attributes: {}, react: PageNotFound };
    }
  }
  const { attributes: pageData, react: PageContent } = contentImport;

  return <>{pageName && <PageContent />}</>;
};

export default InfoPage;
