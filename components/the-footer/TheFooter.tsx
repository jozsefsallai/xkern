import styles from './TheFooter.module.scss';

import clsx from 'clsx';

const TheFooter = ({ absolute }: { absolute?: boolean }) => {
  return (
    <footer className={clsx(styles.footer, { [`${styles.absolute}`]: absolute })}>
      <div className={styles.copy}>
        {new Date().getFullYear()} &copy; xKern.
      </div>
    </footer>
  );
};

export default TheFooter;
