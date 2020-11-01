import Meta from '@/components/Meta';
import Page from '@/components/page/Page';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <Page title="404" subtitle="Page Not Found">
      <Meta
        title="404"
        description="Page not found."
        url="/"
      />

      <p>
        The requested page could not be found. Try to <Link href="/">go back
        to the home page</Link>.
      </p>
    </Page>
  );
};

export default NotFoundPage;
