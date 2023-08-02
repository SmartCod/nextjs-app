import Link from 'next/link'
export default function Sidebar() {
  return (
    <div>
        <div className="flex flex-col h-screen p-3 shadow w-60">
            <div >
                <ul>
                    <li>
                        <Link href="/articles">Articles</Link>
                    </li>
                    <li>
                        <Link href="/books">Books</Link>
                    </li>
                    <li>
                        <Link href="/projects">Projects</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
