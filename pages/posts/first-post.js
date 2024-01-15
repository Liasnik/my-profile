import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title> First Post</title>
      </Head>
      <p>
        This gives me a clear understanding of core technical skills,
        organizational ethics and discipline. My goal is to get a job in a
        reputable IT company where I can use my skills and knowledge to achieve
        good results in the long run.{" "}
      </p>
      <br />
      <p>
        I am looking for a good position in a company to improve productivity
        and growth of the organization, as well as for my personal career
        growth. That's all about me. Thanks for the opportunity to introduce
        myself!!
      </p>
      {/* <h2>
        <Link href="/">Back to home</Link>
      </h2> */}
      {/* <YourComponent src="/images/profile1small.jpg" /> */}
    </Layout>
  );
}

// const imageStyle = {
//   borderRadius: '7%',
//   border: '1px solid #fff',
// }

// const YourComponent = ({ src }) => (
//   <Image
//     priority
//     src={src} // Route of the image file
//     height={185} // Desired size with correct aspect ratio
//     width={144} // Desired size with correct aspect ratio
//     alt="Your Name"
//     style={imageStyle}
//   />
// )
