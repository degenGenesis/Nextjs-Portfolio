// navbar component

import Link from "next/link";
import styles from '../styles/Home.module.css'

export default function Nav() {
  return (
    <>
      <nav>            
          <Link href='/projects/projectsHome' className={styles.navLinks}>Projects</Link>
          <Link href='/about' className={styles.navLinks}>About</Link>
          <Link href='/signup' className={styles.navLinks}>Sign Up</Link>
        
      </nav>
    </>
  );
}