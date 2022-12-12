// sign up page

import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/Home.module.css";

export default function SignUp() {
  return (
    <>
      <Header />
      <h1>Sign Up</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <Footer />
    </>
  );
}