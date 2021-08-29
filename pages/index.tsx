import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Subscribe from '../components/Subscribe'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tasktilt</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <h1>The Upcoming Most Easy-To-Use Tool for Task Management.</h1>
        <span className={styles.main__subtitles}>
          <h3>Tasktilt is going LIVE soon! The design is finished, and I am now building the APIs and UI.</h3>
          <h3>Want to know more and receive updates about the project? Make sure to enter your email below.</h3>
        </span>
        <Subscribe />
        <span className={styles.main__cover}>
          <Image alt='screenshot' height={1600} src='/../public/assets/screenshot-large.png' width={2000} />
        </span>
        <span className={styles.main__image}>
          <Image alt='screenshot' height={1200} src='/../public/assets/screenshot-small.png' width={1600} />  
        </span>
        <h1>Get It All Together, Everything.</h1>
        <span className={styles.main__explainer}>
          <h3>Why make it difficult when it can be easy?</h3>
          <p>Get everyone and everything together by using Tasktilt. Create a new group with its own team members and tasks for all your projects, add your files and deadlines.</p>
          <p>Obligated to use other tools as well? Tasktilt will have a open source public API available to combine multiple sources of truth.</p>
        </span>
      </main>
      <Footer />
    </div>
  )
}