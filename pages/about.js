import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';


const name = 'Suraj Kumar Yadav';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.card}>
      <main className={utilStyles.flexrowcenter}>
        <header className={styles.header}>
          <Image
            priority
            src="/images/profilepic.jpg"
            className={utilStyles.borderCircle}
            height={200}
            width={200}
            alt=""
          />
        </header>
        <section className={utilStyles.padding50px}>
        <h2 className={utilStyles.headingLg}>
              Hi, I'm {''}{name}.
          </h2>
          <p className={styles.paragraph}>
            I work as Frontend Developer at Riggle.
          </p>
          <p className={styles.paragraph}>
          Frontend Developer with Primary Focus on Javascript and React.
          </p>
          <p className={styles.paragraph}>
            I also started Podcast for self-development by talking to people from different industries.It has listened to over 28000+ .
          </p>
          <p className={styles.paragraph}>
          Got also millions of views on my songs.
          </p>
        </section>
      </main>
      </div>
    </Layout>
  );
}
