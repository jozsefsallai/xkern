import styles from './TheFooter.module.scss';

import clsx from 'clsx';

const TheFooter = ({ home }: { home?: boolean }) => {
  return (
    <footer className={clsx(styles.footer, { [`${styles.home}`]: home })}>
      <div className={styles.copy}>
        {new Date().getFullYear()} &copy; xKern.
      </div>
    </footer>
  );
};

export default TheFooter;
