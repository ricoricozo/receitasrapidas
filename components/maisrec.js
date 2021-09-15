import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link  from 'next/link'


function Maisrec (){
    return (
    <>
        <div className={styles.Mais}><h1>Mais Receitas</h1></div>
        <div className={styles.grid}>
          <Link href="/receitapimentao" >
            <a className={styles.card}>
            <Image src = "/pimentao.jpg" width={400} height={280}/>
            <h2>Pimentão Assado com Ovo&rarr;</h2>
            <p>Otima opção para comidas diferentes</p></a>
          </Link>

          <Link href="/" >
            <a  className={styles.card}>
            <Image src = "/frangocosido.jpg" width={400} height={280}/>
            <h2>Frango Cozido &rarr;</h2>
            <p>Tradicionalmente deliciosa</p></a>
          </Link>

          <Link href="/">
            <a className={styles.card}>
            <Image src = "/abobrinha.jpg" width={400} height={280}/>
            <h2>Omelete de Forno de Abobrinha &rarr;</h2>
            <p>MARAVILHOSA, mesmo sendo bem leve</p></a>
          </Link>
        </div>
        <p><Link href="/home">Carregar Mais &rarr;</Link></p>
        
    </>
    )
}

export default Maisrec

