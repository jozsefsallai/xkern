import styles from './ContactInfo.module.scss';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Contact {
  icon: IconDefinition;
  title: string;
  lines: string[];
}

const ContactInfo = () => {
  const info: Contact[] = [
    {
      icon: faMobileAlt,
      title: 'Phone',
      lines: [
        '+1 234 567 890',
        '+1 098 765 432'
      ]
    },
    {
      icon: faMapMarkerAlt,
      title: 'Address',
      lines: [
        '100 Test St., Demo City',
        'Washington D.C., USA'
      ]
    },
    {
      icon: faEnvelope,
      title: 'Email',
      lines: [
        'office@xkern.net'
      ]
    }
  ];

  return (
    <>
      <svg width="0" height="0">
        <radialGradient id="graygradient">
          <stop offset="0%" stopColor="#5f5f5f" />
          <stop offset="100%" stopColor="#aaa" />
        </radialGradient>
      </svg>

      <section className={styles.wrapper}>
        {info.map((block, idx) => (
          <div className={styles.block} key={idx}>
            <div className={styles.header}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={block.icon} />
              </div>
              <h2>{block.title}</h2>
            </div>

            <div className={styles.contents}>
              {block.lines.map((line, idx) => <div key={idx}>{line}</div>)}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ContactInfo;
