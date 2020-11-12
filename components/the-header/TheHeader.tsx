import styles from './TheHeader.module.scss';

import NavigationItem, { NavigationItemOpts } from '../navigation/NavigationItem';
import Link from 'next/link';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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
    href: '/careers',
    label: 'Careers'
  },
  {
    href: '/contact',
    label: 'Contact Us'
  }
];

interface TheHeaderProps {
  fixed?: boolean;
}

const TheHeader = ({ fixed }: TheHeaderProps) => {
  const [navOpened, setNavOpened] = useState(false);

  const toggleHamburger = () => setNavOpened(opened => !opened);

  const router = useRouter();
  useEffect(() => {
    setNavOpened(false);
  }, [router.pathname]);

  return (
    <header className={clsx(styles.siteHeader, { [`${styles.fixed}`]: fixed })}>
      <div className="flex-wrapper header-flex">
        <Link href="/">
          <div className={styles.logo}>
            <img src="/images/xkern_web_logo.png" alt="xKern Technologies" className={styles.logoImage}/>
            <span>xKern</span>
          </div>
        </Link>

        <nav className={clsx(styles.mainnav, { [`${styles.opened}`]: navOpened })}>
          {links.map(link => <NavigationItem key={link.href} {...link} />)}
        </nav>

        <div className={styles.hamburger} onClick={toggleHamburger}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </header>
  );
};

export default TheHeader;
