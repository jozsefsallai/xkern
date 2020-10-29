import TheFooter from '@/components/the-footer/TheFooter';
import TheHeader from '@/components/the-header/TheHeader';
import '../styles/base.scss';

const xKernApp = ({ Component, pageProps }) => {
  return (
    <main className="app">
      <TheHeader />
      <Component {...pageProps} />
    </main>
  );
};

export default xKernApp;
