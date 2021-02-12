import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>We are the team designing the exciting future.</p>
      </section>
      <Link href='./posts/first-post'>
        See first post
      </Link>
    </Layout>
  )
}