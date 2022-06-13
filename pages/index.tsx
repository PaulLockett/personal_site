import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profilePic from '../public/grad_Profile_Pic.jpg'
import GrandCanyon from '../public/grand_Canyon_Couple.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Paul's Personal site</title>
        <meta name="Paul's Personal site" content="Made with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero}>
          <Image src={profilePic} className={styles.heroImage} width={250} height={250}></Image>
          <div className={styles.heroText}>
            <h1>
              Hey 👋🏾
            </h1>
            <h2>
              My name is Paul Lockett
            </h2>
            <h3>
              I’m currently a new grad SWE at **Stealth Startup**
            <br></br>
              Future PM, rookie regenerational finance advocate, MOREHOUSE Man
            </h3>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
