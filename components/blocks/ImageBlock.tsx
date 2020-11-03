import styles from './ImageBlock.module.scss';

import { ReactNode } from 'react';
import Block, { BlockParams } from './Block';
import clsx from 'clsx';

interface ImageBlockParams extends BlockParams {
  src: string;
  alt?: string;
  children: ReactNode;
  reverse?: boolean;
}

const ImageBlock = ({ src, alt, id, secondary, children, reverse }: ImageBlockParams) => {
  return (
    <Block id={id} secondary={secondary}>
      <div className={clsx(styles.imageblock, { [`${styles.reverse}`]: reverse })}>
        <div className={styles.image}>
          <img src={src} alt={alt} />
        </div>

        <div className={styles.contents}>
          {children}
        </div>
      </div>
    </Block>
  );
};

export default ImageBlock;
