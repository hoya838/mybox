import fs from 'fs';
import path from 'path';

export default function Home() {
  const html = fs.readFileSync(
    path.join(process.cwd(), 'content', 'home.html'),
    'utf-8'
  );
  return <div className="panel active" dangerouslySetInnerHTML={{ __html: html }} />;
}
