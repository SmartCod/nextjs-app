import Link from "next/link"
import Layout from "../components/Layout"
export default function Books() {
  return (
    <Layout>
      <h2>Books I reccomend</h2>
      <ul>
        <li>Domain Driven Design</li>
        <li>Extreme Programming</li>
      </ul>
      <Link href="/" className="p-1 shadow rounded-lg">back to Home</Link>
    </Layout>
  )
}
