import styles from './TitleBlock.module.scss';

import Block, { BlockParams } from './Block';

interface TitleBlockParams extends BlockParams {
  title: string;
  slogan?: string;
}

const TitleBlock = ({ title, slogan, id, secondary }: TitleBlockParams) => {
  return (
    <Block id={id} secondary={secondary}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        {slogan && <h2 className={styles.slogan}>{slogan}</h2>}
      </div>
    </Block>
  );
};

export default TitleBlock;
