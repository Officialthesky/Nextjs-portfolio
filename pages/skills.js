import Head from 'next/head';
import styles from '../styles/Home.module.css';
export default function Skills() {
  return (
    <div className={styles.container}>
        <Head>
        <title>Skills</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2 className={styles.title}>
        Skills
        </h2>

        <div className={styles.grid}>
          <div href="/about" className={styles.card}>
            <h3>Frontend Developer at Riggle &rarr;</h3>
            <p>Riggle is digitizing the general trade supply chain for FMCG manufacturers.</p>
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
    </div>
  );
}