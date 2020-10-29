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
      <div className={styles.imageblock}>
        {!reverse && <div className={styles.contents}>
          {children}
        </div>}

        <div className={styles.image}>
          <img src={src} alt={alt} />
        </div>

        {reverse && <div className={clsx(styles.contents, styles.reverse)}>
          {children}
        </div>}
      </div>
    </Block>
  );
};

export default ImageBlock;
