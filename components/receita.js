import Menu from "../components/menu"
import Image from 'next/image'
import Link  from 'next/link'
import styles from '../styles/Home.module.css'


function Receitas(){
    return (
        <>
           <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="https://nextjs.org">Next.js!</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Link href="https://nextjs.org/docs" >
            <a className={styles.card}><h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p></a>
          </Link>

          <Link href="https://nextjs.org/learn" >
            <a  className={styles.card}><h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p></a>
          </Link>

          <Link
            href="https://github.com/vercel/next.js/tree/master/examples"
          >
            <a className={styles.card}><h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p></a>
          </Link>

          <Link
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          >
            <a className={styles.card}><h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p></a>
          </Link>
        </div>
      </main>
        
        </>
    )
}

export default Receitas