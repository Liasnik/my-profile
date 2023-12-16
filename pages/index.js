import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

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
          Read <Link href="/posts/first-post">this page!</Link>
        </h2>
      </Layout>
    </div>
  )
}

export function Introduction() {
  return (
    <>
      <p>
        My name is Alexander Liasnik. I am a frontend developer. I know HTML,
        CSS, JavaScrypt, React. I have been coding for 10 months and during this
        time I have done 1 successful team projects and 3 individual ones.
      </p>
      <br />
    </>
  )
}
