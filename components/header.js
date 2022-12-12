// header component

import Nav from "./nav";
import styles from '../styles/Home.module.css'

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1>TrevorJS</h1>
        <Nav />
      </header>
    </>
  );
}