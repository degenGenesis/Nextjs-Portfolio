// about page
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <>
      <Header />
      <h1>About</h1>
      <Link href="/">Back to home</Link>
      <p>
        As a developer, I have a passion for creating intuitive and user-friendly experiences. I am always seeking opportunities to learn and improve my skills and am excited to bring my expertise to a new team. Thank you for considering me for your project.
      </p>
      <Footer />
    </>
  );
}