import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

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
  );
}

export function Introduction() {
  return (
    <>
      <p>
        My name is Alexander Liasnik. I'm a frontend developer. I have more than
        1 year of experience developing web applications using JavaScript and
        more than 4 years in the IT field in general. I know HTML, CSS,
        SASS/SCSS, JavaScrypt, React, Redux, Next.js. I have completed 2
        successful team projects, 3 individual projects and over 10 pet
        projects.
      </p>
      <br />
    </>
  );
}
