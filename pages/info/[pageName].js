import { useRouter } from "next/router";

const InfoPage = () => {
  const router = useRouter();
  const { pageName } = router.query;

  // since this is static, next.js optimizes via automatic static optimization,
  // so need to have a failsafe initialization while pageName is undefined.
  // next will inject router.query after page hydration
  // see bottom of here for details: https://nextjs.org/docs/routing/dynamic-routes
  const { attributes: pageData, react: PageContent } = pageName
    ? require(`/content/info/${pageName}.md`)
    : {};

  return <>{pageName && <PageContent />}</>;
};

export default InfoPage;
