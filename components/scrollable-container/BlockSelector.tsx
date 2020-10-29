import clsx from 'clsx';
import styles from './BlockSelector.module.scss';

export interface BlockSelectorOpts {
  idx: number;
  current: number;
  scroll(idx: number): void;
}

const BlockSelector = ({ idx, current, scroll }: BlockSelectorOpts) => {
  return (
    <div
      className={clsx(styles.item, { [`${styles.active}`]: idx === current })}
      onClick={() => scroll(idx)}
    >
      <span className={styles.dot} />
    </div>
  );
};

export default BlockSelector;
