import Link from "next/link"
import Layout from "../../components/Layout"
export default function DesignPatterns() {
  return (
    <Layout>
      <h2>Design Patterns</h2>
      <Link href="/articles" className="p-1 shadow rounded-lg">back to articles</Link>
    </Layout>
  )
}
