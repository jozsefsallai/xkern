import styles from './NavigationItem.module.scss';

import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

export interface NavigationItemOpts {
  href: string;
  external?: boolean;
  label: string;
}

const isActive = (url: string): boolean => {
  url = url.split(/((?!^)\/|\?|\#)/g)[0];
  // /foo?hello -> /foo
  // /foo#hello -> /foo
  // /foo/bar/baz -> /foo

  const router = useRouter();

  if (url === '/') {
    return router.pathname === url;
  }

  return router.pathname.startsWith(url);
};

const NavigationItem = ({ href, label, external }: NavigationItemOpts) => {
  if (external) {
    return (
      <a
        className={styles.item}
        href={href}
        rel="noreferrer noopener"
        target="_blank"
      >{label}</a>
    );
  }

  return (
    <Link href={href}>
      <a className={clsx(styles.item, { [`${styles.active}`]: isActive(href) })}>{label}</a>
    </Link>
  );
};

export default NavigationItem;
