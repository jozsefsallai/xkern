import styles from './Block.module.scss';
import clsx from 'clsx';
import { ReactNode } from 'react';

export interface BlockParams {
  children?: ReactNode;
  id: string;
  secondary?: boolean;
  center?: boolean;
}

const Block = ({ children, id, secondary, center }: BlockParams) => {
  return (
    <section className={clsx(styles.fullpageBlock, {
      [`${styles.secondary}`]: secondary,
      [`${styles.center}`]: center
    })} id={id}>
      <div className={styles.wrapper}>
        {children}
      </div>
    </section>
  );
};

export default Block;
