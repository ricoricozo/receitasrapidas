import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link  from 'next/link'


function Menu (){
    return (
        <>
        <div className={styles.div1}>
          <h1>Receitas Rapida</h1>
          <Image src = "/frango2.png" width={100} height={70}/>
        </div>
      </>
    )
}

export default Menu