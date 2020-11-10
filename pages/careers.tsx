import JobApplicationModal from '@/components/jobs/JobApplicationModal';
import JobList, { Job } from '@/components/jobs/JobsList';
import Meta from '@/components/Meta';
import Page from '@/components/page/Page';
import { useState } from 'react';

const JobsPage = () => {
  const jobs: Job[] = [
    {
      title: 'Senior Software Engineer',
      description: 'Required expertise: Python, machine learning, and SCRUM.',
      url: 'https://google.com'
    },
    {
      title: 'Junior Frontend Engineer',
      description: 'Required expertise: React, HTML5, Material UI.',
      url: 'https://google.com'
    },
    {
      title: 'Database Engineer',
      description: 'Apply to this one if you think you\'re a PostgreSQL master.',
      url: 'https://google.com'
    },
    {
      title: 'Office Manager',
      description: 'Just do stuff in our office.',
      url: 'https://google.com'
    }
  ];

  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const handleModalClose = () => {
    setSelectedJob(null);
  };

  return (
    <Page title="Careers" subtitle="View our job offerings.">
      <Meta
        title="Careers"
        description="Careers page description"
        url="/careers"
      />

      <JobList jobs={jobs} onSelected={setSelectedJob} />
      <JobApplicationModal job={selectedJob} onClose={handleModalClose} />
    </Page>
  );
};

export default JobsPage;
