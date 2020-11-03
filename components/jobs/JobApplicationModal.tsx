import { SourceMapPayload } from 'module';
import Modal from '../modal/Modal';
import JobApplicationForm, { JobApplicationFormFields, JobApplicationFormServerResponse } from './JobApplicationForm';
import { Job } from './JobsList';

export interface JobApplicationModalProps {
  onClose(): void;
  job: Job;
}

const JobApplicationModal = ({ onClose, job }: JobApplicationModalProps) => {
  const send = async (jobTitle: string, { name, email, resume }: JobApplicationFormFields): Promise<JobApplicationFormServerResponse> => {
    const form = new FormData();
    form.append('job', jobTitle);
    form.append('name', name);
    form.append('email', email);
    form.append('resume', resume);

    const res = await fetch(process.env.NEXT_PUBLIC_JOB_APPLICATION_URL, {
      method: 'POST',
      body: form
    });

    const json: JobApplicationFormServerResponse = await res.json();
    return json;
  };

  return (
    <Modal onClose={onClose}>
      <h1>Applying for "{job.title}"</h1>

      <JobApplicationForm job={job} send={send} />
    </Modal>
  );
};

export default JobApplicationModal;
