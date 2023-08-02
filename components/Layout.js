import Head from 'next/head'
import Sidebar from './Sidebar';
import Content from './Content';
export default function Layout({ title, description, keywords, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <div className="flex">
        <Sidebar />
        <Content children={children} />
      </div>
    </div>
  );
}

Layout.defaultProps = {
  title: "Daniel Hajek Software Architect",
  description: "Daniel's Hajek blog on software development and architecture",
  keywords: "development, .net core, software architecture, design patterns",
};
