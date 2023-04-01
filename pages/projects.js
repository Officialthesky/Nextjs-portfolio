import Head from 'next/head';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';
export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2 className={styles.title}>
        Projects
        </h2>

        <div className={styles.grid}>
          <a href="https://itsmyyoutube.netlify.app/" target="_blank" className={styles.card}>
            <h3>Youtube Clone &rarr;</h3>
            <p>Get to know little more about me.</p>
          </a>

          <a href="https://itsmyyoutube.netlify.app/" target="_blank" className={styles.card}>
            <h3>TVmazeshow &rarr;</h3>
            <p>Have a little but worthy one.</p>
          </a>

          <a href="https://tallyproducts.netlify.app/" target="_blank" className={styles.card}>
            <h3>Tally Products &rarr;</h3>
            <p>You are so interested to see this 😉 </p>
          </a>

          <a href="https://8qq97g.csb.app/" target="_blank" className={styles.card}>
            <h3>Notion Clone &rarr;</h3>
            <p>
              Working on it.
            </p>
          </a>
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