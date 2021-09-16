import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import Menu from '../components/menu'
import Image from 'next/image'
import Link from 'next/dist/client/link'
import Maisrec from '../components/maisrec'

function Frango() {
  return (
    <>
    <Menu />
    <main className={styles.main}>
        <div className={styles.grid2}>
            <div><h1>Filé Frango</h1>
            <h1>na Panela de Pressão</h1>
            </div>
            <div><Image src = "/frangocosido.jpg" width={450} height={340}/></div>
        </div>
        <div className={styles.divrec}>
          <p className={styles.pp}>Receita</p>
          <li className={styles.h1p}>4 filés de frango</li>
          <li className={styles.h1p}>1 tomate picado em cubos</li>
          <li className={styles.h1p}>1/2 cebola picada</li>
          <li className={styles.h1p}>2 colheres de sopa de óleo</li>
          <li className={styles.h1p}>1/2 colher de sopa de colorau</li>
          <li className={styles.h1p}>Sal, Pimenta do reino, Orégano à gosto</li>
          <p className={styles.pp}>Modo de preparo</p>
          <li className={styles.h1p}>Na panela de pressão, coloque o óleo e doure a cebola.</li>
          <li className={styles.h1p}>Em seguida adicione o frango e o tomate.</li>
          <li className={styles.h1p}>Misture tudo, Tempere, tampe a panela e deixe cozinhar na pressão por cerca 8 minutos.</li>
          <li className={styles.h1p}>Retire a pressão com cuidado e está pronto para servir.</li>
        </div>
      <Maisrec />
    </main>
 <Footer />
    </>
  )
}
export default Frango