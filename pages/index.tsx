import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profilePic from '../public/grad_Profile_Pic.jpg'
import Spline from "@splinetool/react-spline";


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
          <Image src={profilePic} className={styles.logo} width={250} height={250}></Image>
          <div className={styles.card} onClick={()=>{alert("don't click that!")}}>
            <h1>
              Hey 👋🏾
            </h1>
            <h2>
              My name is Paul Lockett
            </h2>
          </div>
          <div className={styles.heroText}>
            <h2>TLDR</h2>
            <ul>
              <li>
               New Grad SWE
              </li>
              <li>
              Future PM
              </li>
              <li>
              Regen
              </li>
              <li>
              Morehouse Man
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.description}>
            <p>
              A recent graduate, I am looking to <u>maximize every opportunity</u> I have
              to grow in technical expertise, business acumen, and product. 
            </p>
              
            <p>
              Currently I write <strong>golang</strong> and <strong>typescript</strong> for
              <a className={styles.link} href='https://neeva.xyz'> Neeva.xyz</a>
              &nbsp;while learning more were I can&nbsp;
              <a className={styles.link} href='https://buildspace.so/@peauts'>see my buildspace profile for more</a>.
            </p>

            <p>
              As a sales minor in college I learned how little I know
              about the business of selling anything so in my current
              job, <strong>I work closely with b2b customers</strong> to learn faster.
            </p>
              
            <p> 
              In between my work on the code and with customers, <u>I 
              write and research</u> what new crazy things could help us &nbsp;
              <u>differentiate further</u>.
            </p>
              
            <p>
              In the future, I want to build products that help people 
              left out by the current economic system thrive in a more&nbsp;
              <strong>cooperative economy</strong> shaped by web3 tech and&nbsp; 
              <strong>self-deterministic</strong> activism.
            </p>
          </div>
          <div>
          <h1>
            <a className={styles.card} target="_blank" rel="noopener noreferrer" href='https://m1.neeva.com/spaces/RA2jX47GT6HLmAaSsHcA3V-aU-FSY46gr9JxCVlH'>
            Resume, Projects, and other important links 
            </a>
          </h1>
          </div>
          <div>
            <Spline
              scene="https://prod.spline.design/zu0GnayQJvdTgWaE/scene.splinecode"
            />
          </div>
      </main>

      <footer className={styles.footer}>
      <a target="_blank" rel="noopener noreferrer" href = "mailto: plockett.pl@gmail.com">plockett.pl@gmail.com</a>
      <a target="_blank" rel="noopener noreferrer" href = "mailto: paul@neeva.co">paul@neeva.co</a>
      <a target="_blank" rel="noopener noreferrer" href = "mailto: paul@n.xyz">paul@n.xyz</a>
      <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/PaulLockettkpb'>
        twitter
      </a>
      </footer>
    </div>
  )
}
