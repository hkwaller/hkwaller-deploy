import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>hkwaller.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>hannes.</h1>
        <a href="mailto://hkwaller@gmail.com">hkwaller@gmail.com</a>
      </main>
    </div>
  );
}
