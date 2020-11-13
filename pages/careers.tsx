import JobApplicationModal from '@/components/jobs/JobApplicationModal';
import JobList, { Job } from '@/components/jobs/JobsList';
import Meta from '@/components/Meta';
import Page from '@/components/page/Page';
import { useState } from 'react';

const JobsPage = () => {
  const jobs: Job[] = [
    {
      title: 'Solution Architect',
      description: 'Profound experience with technologies to architect our software solutions, plan and oversee the development our software',
      url: '/jobs/jd/Job_Description_Architect.pdf'
    },
    {
      title: 'Senior iOS Developer',
      description: 'Proficiency in Swift, Xcode, instruments, storyboard, lldb and Cocoa Touch. Familiar with iOS design pattern, software technologies and development',
      url: '/jobs/jd/Job_Description_iOS_Senior.pdf'
    },
    {
      title: 'Senior Android Developr',
      description: 'Proficiency in Java, KOTLIN, Android Studio, profiling tools, DDMS, ADB etc',
      url: '/jobs/jd/Job_Description_Android_Senior.pdf'
    },
    {
      title: 'Junior iOS Developer',
      description: 'Experience in Swift and Cocoa Touch to build the next generation iOS Applications',
      url: '/jobs/jd/Job_Description_iOS_Junior.pdf'
    },
    {
      title: 'Junior Android Developer',
      description: 'Experience with Android platform, design language and application development to build the next generation apps',
      url: '/jobs/jd/Job_Description_Android_Junior.pdf'
    },
    {
      title: 'Web Developer',
      description: 'Good experience with HTML5, CSS3 and popular front end technologies like TypeScript, Vue, React, npm, jquery etc. ',
      url: '/jobs/jd/Job_Description_Web.pdf'
    },
    {
      title: 'Front Office and Administration',
      description: 'Excellent multilingual communication skills, friendly and cheerful mannerism, good administrative skills and fair experience with office software',
      url: '/jobs/jd/Job_Description_Front_Office.pdf'
    },
    {
      title: 'Tester',
      description: 'Analyzing software that we build, considering use cases and testing the software to find flaws, inconsistencies and suggesting improvements',
      url: '/jobs/jd/Job_Description_Tester.pdf'
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
