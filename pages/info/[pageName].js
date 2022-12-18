import { useRouter } from "next/router";
import { PageNotFound } from "@components/PageNotFound";

const InfoPage = () => {
  const router = useRouter();
  const { pageName } = router.query;

  // since this is static, next.js optimizes via automatic static optimization,
  // so need to have a failsafe initialization while pageName is undefined.
  // next will inject router.query after page hydration
  // see bottom of here for details: https://nextjs.org/docs/routing/dynamic-routes
  let contentImport = {};

  if (pageName) {
    // handle the case where someone visits /info, gets routed here appropriately, but the
    // page doesn't exist
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
