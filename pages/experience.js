import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/Home.module.css';
export default function Experience() {
  return (
         <Layout> 
      <Head>
        <title>Experience</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div style={{width:'800px'}}>
            <h3>Frontend Developer at Riggle {'     '} <span className={styles.paragraph}>(Jun 2022 - Present)</span></h3>
            <ul className={utilStyles.list}>
            <li className={utilStyles.listItem}>Collaborating closely with co-founders, backend team, and design team to successfully deliver projects.</li>
            <li className={utilStyles.listItem}>Building and maintaining three webapps - the company landing page, Admin Panel, and web version of the company's mobile app.</li>
            <li className={utilStyles.listItem}>Working with the existing codebase of the Admin panel written in class functions, AntD, and SCSS.
            </li>
            <li className={utilStyles.listItem}>Achieving search engine rankings for the company website without the aid of an SEO specialist.</li>
            </ul>
            </div>
          </div>
        </div>
      </main>
      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </Layout>
  );
}