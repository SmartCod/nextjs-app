import React from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'
export default function index() {
  return (
    <Layout>
        <ul>
            <li>
                <Link href="/projects/amazonKeywordManager">Amazon KW Manager</Link>
            </li>
        </ul>
        <Link href="/" className="p-1 shadow rounded-lg">back to Home</Link>
    </Layout>
  )
}
