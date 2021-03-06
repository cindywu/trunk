import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="/workspace">
            <a>Trunk</a>
          </Link>
        </h1>

        <p className={styles.description}>
          Literature review for high-performing teams
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://jellypbc.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Produced by Jelly Public Benefit Corporation
        </a>
      </footer>
    </div>
  )
}
