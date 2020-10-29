import styles from './TheFooter.module.scss';

const TheFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copy}>
        {new Date().getFullYear()} &copy; xKern.
      </div>
    </footer>
  );
};

export default TheFooter;
