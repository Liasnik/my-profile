import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title> First Post</title>
      </Head>
      <p>
        Due to this I am good at core technical skills, organizational ethics
        and discipline. My goal is to get a job in a reputed company like yours
        where I can use my skills and knowledge to deliver good results in the
        long term.{' '}
      </p>
      <br />
      <p>
        I am eager to achieve a good position in the company to scale up the
        organization’s production and growth rate and at the same time for my
        personal career growth as well. That’s all about me. And yes, thanks for
        the opportunity given to introduce myself!"
      </p>
      {/* <h2>
        <Link href="/">Back to home</Link>
      </h2> */}
      {/* <YourComponent src="/images/profile1small.jpg" /> */}
    </Layout>
  )
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
