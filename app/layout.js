import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head></Head>
      <body className={styles.container}>
        <h1>Hi,I´m a layout</h1>
        <Link href="/">Home</Link>
        <br />
        <Link href="/blog">Blog</Link>
        <br />
        <Link href="/posts">Posts</Link>
        <br />
        <Link href="/pokemon">Pokemon</Link>
        <br />
        {children}
      </body>
    </html>
  );
}
