import Head from 'next/head'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h2 className={utilStyles.headingXl}>First Post</h2>
      <p>
        This is a content of this article.
      </p>
      <table>
        <tbody>
          <tr>
            <th>alphabet</th>
            <td>ABC</td>
            <td>DEF</td>
          </tr>
          <tr>
            <th>numbers</th>
            <td>123</td>
            <td>456</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  )
}

