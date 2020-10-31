import styles from './ProjectsList.module.scss';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import ProjectBlock from './ProjectBlock';

export interface ProjectLink {
  url: string;
  icon: IconDefinition;
}

export interface Project {
  name: string;
  subtitle: string;
  description: string;
  image: string;

  links?: ProjectLink[];

  underDevelopment?: boolean;
}

const ProjectsList = ({ projects }: { projects: Project[] }) => {
  return (
    <div className={styles.projects}>
      {projects.map((project, idx) => <ProjectBlock key={idx} project={project} />)}
    </div>
  );
};

export default ProjectsList;
