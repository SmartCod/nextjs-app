import Layout from "../../components/Layout";
import Link from "next/link";
export default function amazonKeywordManager() {
  return (
    <Layout>
      <h2>project related to keyword management used by amazon sellers</h2>
      <Link href="/projects" className="p-1 shadow rounded-lg">back to projects</Link>
    </Layout>
  );
}
