import Image from 'next/image'
import styles from '../styles/Home.module.css'

function Footer(){
    return (
        <>
        <footer className={styles.footer}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contato</a>


        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sobre nós{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        
        <a
          href= "https://www.instagram.com/henriquepsrr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Intagram</a>
      </footer>
        </>
    )
}

export default Footer