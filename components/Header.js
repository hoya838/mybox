'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NAV } from '../app/nav';

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const active = (slug) => path === '/' + slug;

  return (
    <>
      <header className="hdr">
        <Link className="logo" href="/">개발자<span>가이드</span></Link>
        <nav className="nav">
          {NAV.map((g) => (
            <div className="navitem" key={g.sec}>
              <button>{g.sec} <span className="caret">▾</span></button>
              <div className="dropdown">
                {g.items.map((it) => (
                  <Link key={it.slug} href={'/' + it.slug}
                    className={active(it.slug) ? 'active' : ''}>{it.label}</Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
        <Link className="ghost right" href="/roadmap">학습 시작</Link>
        <button className="hamb" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
      </header>

      <div className={'drawer' + (open ? ' open' : '')} onClick={() => setOpen(false)}>
        {NAV.map((g) => (
          <div key={g.sec}>
            <div className="navsec">{g.sec}</div>
            {g.items.map((it) => (
              <Link key={it.slug} href={'/' + it.slug}
                className={active(it.slug) ? 'active' : ''}>{it.label}</Link>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
