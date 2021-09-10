import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>

          <a className={styles.card2}>
            <p>Seja bem-vindo </p>
            <h2>Receitas rápidas</h2>
            <h1>Site com receitas rápidas e divertidas</h1>
            <Link href="/home"><a><button className={styles.button}> CLIQUE PARA COZINHAR</button></a></Link>
          </a>

          <Image src = "/fotoabertura.png" width={400} height={280}/>

        </div>
      </main>
    </div>
  )
}
