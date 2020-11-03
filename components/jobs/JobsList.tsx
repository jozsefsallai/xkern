import JobBlock from './JobBlock';
import styles from './JobsList.module.scss';

export interface Job {
  title: string;
  description: string;
  url: string;
}

export interface JobListParams {
  jobs: Job[];
  onSelected(job: Job): void;
}

const JobList = ({ jobs, onSelected }: JobListParams) => {
  return (
    <div className={styles.jobs}>
      {jobs.map((job, idx) => (
        <JobBlock
          key={idx}
          job={job}
          onSelected={onSelected}
        />
      ))}
    </div>
  );
};

export default JobList;
