import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export const siteTitle = 'Oleksandr Liasnik Profile';
const name = 'Oleksandr';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large-image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile5.jpg"
              height={180} // Desired size with correct aspect ratio
              width={180} // Desired size with correct aspect ratio
              alt={name}
              className={utilStyles.borderCircle}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile5.jpg"
                height={108} // Desired size with correct aspect ratio
                width={108} // Desired size with correct aspect ratio
                alt={name}
                className={utilStyles.borderCircle}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}
