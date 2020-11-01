import { CSSProperties } from 'react';
import styles from './LoadingSpinner.module.scss';

export interface LoadingSpinnerOpts {
  size?: number;
  color?: string;
}

const LoadingSpinner = ({ size, color }: LoadingSpinnerOpts) => {
  const style: CSSProperties = {};

  if (size && size > 0) {
    style.width = `${size}px`;
    style.height = `${size}px`;
    style.borderWidth = `${Math.floor(size / 3)}px`;
  }

  if (color && color.length) {
    style.borderColor = color;
  }

  return (
    <div className={styles.spinner} style={style} />
  );
};

export default LoadingSpinner;
