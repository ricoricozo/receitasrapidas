import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import Menu from '../components/menu'
import Receitas from '../components/receita'


function Home() {
  return (
    <>
    <Menu />
    <Receitas />
    <Footer />
    </>
  )
}
export default Home