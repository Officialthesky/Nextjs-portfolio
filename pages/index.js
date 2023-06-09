import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SURAJ KUMAR YADAV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className={styles.title}>
        नमस्कार! 🙏🏼
        </p>

        <div className={styles.grid}>
          <Link href="/about" className={styles.card}>
            <h3>About me &rarr;</h3>
            <p>Get to know little more about me.</p>
          </Link>

          <Link href="/experience" className={styles.card}>
            <h3>Experience &rarr;</h3>
            <p>Have a one but worthy one.</p>
          </Link>

          <Link
            href="/projects"
            className={styles.card}
          >
            <h3>Projects &rarr;</h3>
            <p>You are so excited to see this 😉 </p>
          </Link>

          <Link
            href="/skills"
            className={styles.card}
          >
            <h3>Skills &rarr;</h3>
            <p>
              Working on it.
            </p>
          </Link>
        </div>
      </main>

      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer> */}

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
  )
}
