import fs from 'fs';
import path from 'path';
import { NAV } from '../nav';

const slugs = NAV.flatMap((g) => g.items.map((it) => it.slug));

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export default async function Page({ params }) {
  const { slug } = await params;
  const file = path.join(process.cwd(), 'content', slug + '.html');
  if (!fs.existsSync(file)) {
    return <main className="main"><div className="panel active"><h1>없는 페이지</h1></div></main>;
  }
  const html = fs.readFileSync(file, 'utf-8');
  return <main className="main"><div className="panel active" dangerouslySetInnerHTML={{ __html: html }} /></main>;
}
