import styles from './ProjectBlock.module.scss';

import { Project } from './ProjectsList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectBlock = ({ project }: { project: Project }) => {
  const {
    name,
    subtitle,
    description,
    image,
    links,
    underDevelopment
  } = project;

  return (
    <div className={styles.project}>
      <div className={styles.image}>
        <img src={image} alt={name} title={name} />
      </div>

      <div className={styles.info}>
        <h2>{name}</h2>
        <h3>{subtitle}</h3>
        <div className={styles.description}>
          <p>{description}</p>
        </div>

        {links && links.length && (
          <div className={styles.links}>
            {links.map(link => (
              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={link.icon} />
              </a>
            ))}
          </div>
        )}

        {underDevelopment && <div className={styles.underDevelopment}>Under Development</div>}
      </div>
    </div>
  );
};

export default ProjectBlock;
