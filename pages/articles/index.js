import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
export default function Articles() {
  return (
    <Layout>
      <ul>
        <li>
          <Link href="/articles/designPatterns">Design Patterns</Link>
        </li>
        <li>
          <Link href="/articles/softwareArchitecture">
            Software Architecture
          </Link>
        </li>
      </ul>
      <Link href="/" className="p-1 shadow rounded-lg">back to Home</Link>
    </Layout>
  );
}
