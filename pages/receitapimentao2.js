import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import Menu from '../components/menu'
import Image from 'next/image'
import Link from 'next/dist/client/link'
import Maisrec from '../components/maisrec'

function Pimenta2() {
  return (
    <>
    <Menu />
    <main className={styles.main}>
        <div className={styles.grid2}>
            <div><h1>Pimentão Recheado</h1>
            <h1> com Queijo Cottage</h1>
            </div>
            <div><Image src = "/pimentaocottage.jpg" width={450} height={340}/></div>
        </div>
        <div className={styles.divrec}>
          <p className={styles.pp}>Receita</p>
          <li className={styles.h1p}>1 pimentao grande</li>
          <li className={styles.h1p}>150 g de queijo cottage - cerca de uma xícara</li>
          <li className={styles.h1p}>2 colheres de sopa de molho de tomate</li>
          <li className={styles.h1p}>2 fatias de muçarela</li>
          <li className={styles.h1p}>Ervas à gosto</li>
          <li className={styles.h1p}>Sal à gosto</li>
          <li className={styles.h1p}>Pimenta do reino</li>
          <p className={styles.pp}>Modo de preparo</p>
          <li className={styles.h1p}>Limpe o pimentao, corte o topo, remova o interior e faça uma base de queijo mussarela.</li>
          <li className={styles.h1p}>Em uma tigela, misture o queijo cottage, o molho de tomate, as ervas (eu usei manjericão e salsinha), sal e pimenta do reino à gosto.</li>
          <li className={styles.h1p}>Depois, coloque o recheio no pimentão e cubra com uma fatia de queijo muçarela. Leve ao forno por 20 minutos.</li>
        </div>
      <Maisrec />
    </main>
 <Footer />
    </>
  )
}
export default Pimenta2