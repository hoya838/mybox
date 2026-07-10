'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV } from '../app/nav';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Sidebar() {
  const path = usePathname();
  const isActive = (slug) =>
    slug === '' ? path === '/' : path === '/' + slug;
  return (
    <aside className="sidebar">
      <div className="brand">개발자 가이드<small>입문 → 심화 · 학습 정리</small></div>
      <Link className={'tab' + (path === '/' ? ' active' : '')} href="/">대시보드</Link>
      {NAV.map((group) => (
        <div key={group.sec}>
          <div className="navsec">{group.sec}</div>
          {group.items.map((it) =>
            it.href ? (
              <a
                key={it.slug}
                className="tab"
                href={BASE + it.href}
                target="_blank"
                rel="noopener"
              >
                {it.label}
              </a>
            ) : (
              <Link
                key={it.slug}
                className={'tab' + (isActive(it.slug) ? ' active' : '')}
                href={'/' + it.slug}
              >
                {it.label}
              </Link>
            )
          )}
        </div>
      ))}
    </aside>
  );
}
