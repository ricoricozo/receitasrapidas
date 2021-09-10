import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

function Footer(){
    return (
        <>
        <footer className={styles.footer}>
        <Link
          href="https://www.google.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contato</Link>


        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <a>Sobre nós{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> </a>
        </Link>
        
        <Link
          href= "https://www.instagram.com/henriquepsrr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram</Link>
      </footer>
        </>
    )
}

export default Footer