import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import Menu from '../components/menu'
import Link from 'next/dist/client/link'
import Image from 'next/image'

function Letrap() {
  return (
    <>
    <Menu />
    <main className={styles.main}>
        <h1>Beneficios do Pimentão</h1>
        <div className={styles.grid3}>
            <div><Image src = "/Pimentao1.jpg" width={450} height={350}/></div>
            <div className={styles.tamanho}><p> Os benefícios do pimentão variam de acordo também com o seu grau de maturação. </p>
            <p>Quando verde, esse legume é rico em vitamina E, carotenoides e betacaroteno, que ajudam o organismo na prevenção de doenças tais como cataratas e câncer de próstata, de pulmão, de intestino e de garganta.</p>
            <p>Além desses benefícios é uma importante fonte de vitaminas:</p>
            <li>Complexo B</li>
            <li>minerais (potássio, fósforo, magnésio e cálcio)</li>
            <li>Ácidos graxos insaturados e bioflavonoides</li>
            <p>Isto é, componentes que são verdadeiros antioxidantes.</p>
            </div>
        </div>

        <div className={styles.Mais}><h1>Receitas com Pimentão</h1></div>
        <div className={styles.grid}>
          <Link href="/receitapimentao" >
            <a className={styles.card}>
            <Image src = "/pimentao.jpg" width={400} height={280}/>
            <h2>Pimentão Assado com Ovo &rarr;</h2></a>
          </Link>

          <Link href="/receitapimentao2" >
            <a  className={styles.card}>
            <Image src = "/pimentaocottage.jpg" width={400} height={280}/>
            <h2>Pimentão Recheado com Queijo Cottage &rarr;</h2></a>
          </Link>

          <Link href="/">
            <a className={styles.card}>
            <Image src = "/pimentãocremoso.jpg" width={400} height={280}/>
            <h2>Pimentão Recheado de Arroz Cremoso &rarr;</h2></a>
          </Link>
          
          <Link href="/">
            <a className={styles.card}>
            <Image src = "/pimentaoricota.jpg" width={400} height={280}/>
            <h2>Pimentão Recheado com Ricota &rarr;</h2></a>
          </Link>
          
          <Link href="/">
            <a className={styles.card}>
            <Image src = "/pimentãocremoso.jpg" width={400} height={280}/>
            <h2>Omelete de Forno de Abobrinha &rarr;</h2></a>
          </Link>
          
          <Link href="/">
            <a className={styles.card}>
            <Image src = "/pimentãocremoso.jpg" width={400} height={280}/>
            <h2>Omelete de Forno de Abobrinha &rarr;</h2></a>
          </Link>
        </div>        
    </main>
    <Footer />
    </>
  )
}
export default Letrap