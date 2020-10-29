import styles from './Page.module.scss';

import { ReactNode } from 'react';
import TheFooter from '../the-footer/TheFooter';

export interface PageProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const Page = ({ title, subtitle, children }: PageProps) => {
  return (
    <section className={styles.page}>
      <div className={styles.meta}>
        <div className="mid">
          <h1>{title}</h1>
          {subtitle && <h2>{subtitle}</h2>}
        </div>
      </div>
      <div className={styles.contents}>
        <div className="mid">
          {children}
        </div>
      </div>

      <TheFooter />
    </section>
  );
};

export default Page;
