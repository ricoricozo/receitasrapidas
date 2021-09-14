import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link  from 'next/link'


function Menu (){
    return (
        <>
        <div className={styles.div1}>
          <div><h1><Link href= "/home">Receitas Rápidas</Link></h1></div>
          <div><p><Image src = "/frango2.png" width={200} height={105}/></p></div>
          <div><input 
            type="text"
            id="pesquisa" 
            name="pesquisa" 
            value="Pesquisar receita" />
          </div>
        </div>
      </>
    )
}

export default Menu