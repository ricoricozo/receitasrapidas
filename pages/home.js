import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import Menu from '../components/menu'
import Receitas from '../components/receita'
import Link from 'next/dist/client/link'

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