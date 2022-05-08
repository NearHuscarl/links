import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import directs from "./direct.json";

type LinkCardProps = {
  name: string;
  description: string;
};
function LinkCard({ name, description }: LinkCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardName}>
        <h2 className={styles.h2}>
          {/* note: next/Link doesn't redirect, idk why */}
          <a href={`/${name.toLocaleLowerCase()}`}>{name}</a>
        </h2>
        <button
          className={styles.cardBtn}
          onClick={() => {
            navigator.clipboard.writeText(
              window.location.host + "/" + name.toLocaleLowerCase()
            );
            alert("Copied url to your clipboard.");
          }}
        >
          📋
        </button>
      </div>
      <p>{description}</p>
    </div>
  );
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>A collection of links to my stuff</h1>

        <div className={styles.grid}>
          {directs.map((d) => (
            <LinkCard name={d.name} description={d.desc} />
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
