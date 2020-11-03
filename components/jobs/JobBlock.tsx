import styles from './JobBlock.module.scss';

import { MouseEvent } from 'react';
import { Job } from './JobsList';

export interface JobBlockParams {
  job: Job;
  onSelected(job: Job): void;
}

const JobBlock = ({ job, onSelected }: JobBlockParams) => {
  const {
    title,
    description,
    url
  } = job;

  const apply = (e: MouseEvent) => {
    e.preventDefault();
    onSelected(job);
  };

  return (
    <div className={styles.job}>
      <h2>{title}</h2>
      <p>{description}</p>

      <div className={styles.moreInfo}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          View full description
        </a>
      </div>

      <div className={styles.buttonContainer}>
        <button className="primary" onClick={apply}>Apply</button>
      </div>
    </div>
  );
};

export default JobBlock;
