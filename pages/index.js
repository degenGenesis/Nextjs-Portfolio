import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TrevorJS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I'm Trevor. <Link href="/projects/projectsHome">Check out my projects!</Link>
        </h1>

        <p className={styles.description}>
          Or preview the links and see my bio below{' '} 
        </p>

        <div className={styles.grid}>
          {/* AudioSlate */}
          <a href="https://cgtones.github.io/Audioslate/" className={styles.card} target='blank'>
            <h2>AudioSlate &rarr;</h2>
            <iframe className={styles.projects} src='https://cgtones.github.io/Audioslate/'  width='100%' height='100%' />
            <p className={styles.description}>Utilizes the Spotify API to allow user to search for songs by album, artist, or song name & save to a custom playlist.
            </p>
          </a>

          {/* Ravenous */}
          <a href="https://cgtones.github.io/Ravenous/" className={styles.card} target='blank'>
            <h2>Ravenous &rarr;</h2>
            <iframe className={styles.projects} src='https://cgtones.github.io/Ravenous/'  width='100%' height='100%' />
            <p className={styles.description}>Utilizes the Yelp API to allow user to search for restaurants and businesses and see ratings and reviews.
            </p>
          </a>

          {/* Watch Party */}
          <a href="https://degengenesis.github.io/Film-Finder/" className={styles.card} target='blank'>
            <h2>Watch Party &rarr;</h2>
            <iframe className={styles.projects} src='https://degengenesis.github.io/Film-Finder/'  width='100%' height='100%' />
            <p className={styles.description}>Utilizes the Spotify API to allow user to search for songs by album, artist, or song name & save to a custom playlist.
            </p>
          </a>

          {/* Excursion */}
          <a href="https://cgtones.github.io/excursion/" className={styles.card} target='blank'>
            <h2>Excursion &rarr;</h2>
            <iframe className={styles.projects} src='https://cgtones.github.io/excursion/'  width='100%' height='100%' />
            <p className={styles.description}>Utilizes the Spotify API to allow user to search for songs by album, artist, or song name & save to a custom playlist.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
