import Head from "next/head";
import ArticleLists from "../components/ArticleLists";
import styles from "../styles/Home.module.css";

export const config = { amp: true };

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>AMP News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ArticleLists data={data.articles} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const apiKey = process.env.apiKey;

  const data = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`
  ).then((res) => res.json());

  return {
    props: {
      data,
    },
  };
}
