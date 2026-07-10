import fs from 'fs';
import path from 'path';
import { NAV } from '../nav';

// href 항목(외부 정적 자산, 예: graphify)은 내부 라우트가 아니므로 제외.
const slugs = NAV.flatMap((g) => g.items.filter((it) => !it.href).map((it) => it.slug));

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export default async function Page({ params }) {
  const { slug } = await params;
  const file = path.join(process.cwd(), 'content', slug + '.html');
  if (!fs.existsSync(file)) {
    return <main className="main"><div className="panel active"><h1>없는 페이지</h1></div></main>;
  }
  let html = fs.readFileSync(file, 'utf-8');
  // 주입 HTML 내 root-relative 링크(href="/web" 등)는 Next이 basePath를 안 붙인다.
  // GitHub Pages(/mybox 하위경로) 배포 시 빌드타임에 프리픽스 주입. 로컬·Vercel은 빈 값이라 무영향.
  const base = process.env.PAGES_BASE_PATH || '';
  if (base) html = html.replace(/(href|src)="\/(?!\/)/g, `$1="${base}/`);
  return <main className="main"><div className="panel active" dangerouslySetInnerHTML={{ __html: html }} /></main>;
}
