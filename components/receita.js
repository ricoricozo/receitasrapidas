import Menu from "../components/menu"
import Image from 'next/image'
import Link  from 'next/link'
import styles from '../styles/Home.module.css'


function Receitas(){
    return (
        <>
           <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="/"> A</Link> 
          <Link href="/"> B</Link>
          <Link href="/"> C</Link>
          <Link href="/"> D</Link>
          <Link href="/"> E</Link>
          <Link href="/"> F</Link>
          <Link href="/"> G</Link>
          <Link href="/"> H</Link>
          <Link href="/"> I</Link>
          <Link href="/"> J</Link>
          <Link href="/"> K</Link>
          <Link href="/"> L</Link>
          <Link href="/"> M</Link>
          <Link href="/"> N</Link>
          <Link href="/"> O</Link>
          <Link href="/"> P</Link>
          <Link href="/"> Q</Link>
          <Link href="/"> R</Link>
          <Link href="/"> S</Link>
          <Link href="/"> T</Link>
          <Link href="/"> U</Link>
          <Link href="/"> V</Link>
          <Link href="/"> W</Link>
          <Link href="/"> X</Link>
          <Link href="/"> Y</Link>
          <Link href="/"> Z</Link>
        </h1>

        <p className={styles.description}>
        (Clique na letra inicial do produto principal){' '}
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