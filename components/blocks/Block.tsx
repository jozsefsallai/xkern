import styles from './Block.module.scss';
import clsx from 'clsx';
import { ReactNode } from 'react';

export interface BlockParams {
  children?: ReactNode;
  id: string;
  secondary?: boolean;
}

const Block = ({ children, id, secondary }: BlockParams) => {
  return (
    <section className={clsx(styles.fullpageBlock, { [`${styles.secondary}`]: secondary })} id={id}>
      <div className={styles.wrapper}>
        {children}
      </div>
    </section>
  );
};

export default Block;
