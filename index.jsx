import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>

          <h1><i>  </i></h1>
          <h1><i>  </i></h1>
          <h1><i>  </i></h1>

        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Yamid Duarte</h1>
            <h6 className={styles.bio}>Project Manager</h6>
            <Link href="/projects">
              <button className={styles.button}>View Projects</button>
            </Link>
            <Link href="/Yamid_Duarte_-_Resume.pdf">
              <button className={styles.outlined}>Download Resume</button>
            </Link>
          </div>
          {/* <Illustration className={styles.illustration} />*/} 
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
