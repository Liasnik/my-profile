import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { Introduction } from '../components/Introduction';

export default function Home() {
  return (
    <div>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className={utilStyles.headingMd}>
          <Introduction />
        </section>
        <h2 className={utilStyles.headingMd}>
          Read <Link href="/posts/first-post">next page!</Link>
        </h2>
      </Layout>
    </div>
  );
}
