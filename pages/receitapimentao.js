import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import Menu from '../components/menu'
import Image from 'next/image'
import Link from 'next/dist/client/link'
import Maisrec from '../components/maisrec'

function Pimenta() {
  return (
    <>
    <Menu />
    <main className={styles.main}>
        
        <div className={styles.grid2}>
            <div><h1>Pimentão Recheado</h1>
            <h1> com Ovo assado</h1>
            </div>
            <div><Image src = "/pimentao.jpg" width={450} height={340}/></div>
        </div>
        <div className={styles.divrec}>
          <p className={styles.pp}>Receita</p>
          <li className={styles.h1p}>3 Pimentões Grandes</li>
          <li className={styles.h1p}>6 Ovos</li>
          <li className={styles.h1p}>Sal a gosto</li>
          <li className={styles.h1p}>Pimenta do reino a gosto</li>
          <li className={styles.h1p}>Azeite</li>
          <p className={styles.pp}>Modo de preparo</p>
          <li className={styles.h1p}>Lave o pimentão e retire toda parte branca e sementes que tem dentro dele.</li>
          <li className={styles.h1p}>Disponha os mesmos em um tabuleiro levemente untado com azeite e tempere os pimentões com sal, azeite e pimenta do reino.</li>
          <li className={styles.h1p}>Agora é rechear os pimentões e levar ao forno em temperatura média por uns 25 min a 30 min.</li>
          <li className={styles.h1p}>A ideia é deixar o pimentão macio, mas não molengo…</li>
        </div>
      <Maisrec />
        
    </main>
 <Footer />
    </>
  )
}
export default Pimenta