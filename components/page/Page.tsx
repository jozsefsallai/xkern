import styles from './Page.module.scss';

import { ReactNode } from 'react';
import TheFooter from '../the-footer/TheFooter';

import { motion } from 'framer-motion';

export interface PageProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const Page = ({ title, subtitle, children }: PageProps) => {
  const transitionVariants = {
    initial: {
      opacity: 0,
      transition: {
        duration: 0.25
      }
    },
    out: {
      opacity: 0,
      transition: {
        duration: 0.25
      }
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.25
      }
    }
  };

  return (
    <section className={styles.page}>
      <div className={styles.meta}>
        <motion.div
          variants={transitionVariants}
          initial="initial"
          animate="in"
          exit="out"
        >
          <div className="mid">
            <h1>{title}</h1>
            {subtitle && <h2>{subtitle}</h2>}
          </div>
        </motion.div>
      </div>
      <div className={styles.contents}>
        <motion.div
          variants={transitionVariants}
          initial="initial"
          animate="in"
          exit="out"
        >
          <div className="mid">
            {children}
          </div>
        </motion.div>
      </div>

      <TheFooter />
    </section>
  );
};

export default Page;
