import Menu from "../components/menu"
import Image from 'next/image'
import Link  from 'next/link'
import styles from '../styles/Home.module.css'
import Letrap from "../pages/letraP"


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
          <Link href="/letraP"> P</Link>
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
          <Link href="/receitapimentao" >
            <a className={styles.card}>
            <Image src = "/pimentao.jpg" width={400} height={280}/>
            <h2>Pimentão Assado com Ovo&rarr;</h2>
            <p>Otima opção para comidas diferentes</p></a>
          </Link>

          <Link href="/receitafrango" >
            <a  className={styles.card}>
            <Image src = "/frangocosido.jpg" width={400} height={280}/>
            <h2>Frango Cozido &rarr;</h2>
            <p>Tradicionalmente deliciosa</p></a>
          </Link>

          <Link href="/">
            <a className={styles.card}>
            <Image src = "/abobrinha.jpg" width={400} height={280}/>
            <h2>Omelete de Forno de Abobrinha &rarr;</h2>
            <p>MARAVILHOSA, mesmo sendo leve</p></a>
          </Link>

          <Link href="/">
            <a className={styles.card}>
            <Image src = "/brigadeiro.jpg" width={400} height={280}/>
            <h2>Brigadeiro de Abacaxi &rarr;</h2>
            <p>Um delicioso doce para ser feito para uma festa</p></a>
          </Link>

          <Link href="/">
            <a className={styles.card}>
            <Image src = "/abobrinharef.jpg" width={400} height={280}/>
            <h2>Abobrinha Refogada &rarr;</h2>
            <p>Light e essencial</p></a>
          </Link>

          <Link href="/">
            <a className={styles.card}>
            <Image src = "/sopafrango.jpg" width={400} height={280}/>
            <h2>Sopa de frango Cremosa &rarr;</h2>
            <p>Para dias mais chuvosos, com muito sabor</p></a>
          </Link>
        </div>
      </main>
        
        </>
    )
}

export default Receitas