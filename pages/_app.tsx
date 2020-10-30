import TheHeader from '@/components/the-header/TheHeader';
import { useRouter } from 'next/router';

import '../styles/base.scss';

const xKernApp = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <main className="app">
      <TheHeader fixed={router.pathname === '/'} />
      <Component {...pageProps} />
    </main>
  );
};

export default xKernApp;
