import styles from './TheHeader.module.scss';

import NavigationItem, { NavigationItemOpts } from '../navigation/NavigationItem';
import Link from 'next/link';

const links: NavigationItemOpts[] = [
  {
    href: '/',
    label: 'Home'
  },
  {
    href: '/projects',
    label: 'Projects'
  },
  {
    href: '/jobs',
    label: 'Jobs'
  },
  {
    href: '/contact',
    label: 'Contact Us'
  }
];

const TheHeader = () => {
  return (
    <header className={styles.siteHeader}>
      <div className="flex-wrapper">
        <Link href="/">
          <div className={styles.logo}>
            <img src="/images/logo.jpg" alt="xKern Technologies" />
            <span>xKern</span>
          </div>
        </Link>

        <nav className="mainnav">
          {links.map(link => <NavigationItem key={link.href} {...link} />)}
        </nav>
      </div>
    </header>
  );
};

export default TheHeader;
