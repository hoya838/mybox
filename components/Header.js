'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NAV } from '../app/nav';
import * as Icons from 'lucide-react';

function Ic({ name, size = 16 }) {
  const C = Icons[name] || Icons.Circle;
  return <C size={size} strokeWidth={1.9} />;
}

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

// href 있으면 public/ 정적 자산(새 탭), 없으면 Next 내부 라우트.
function NavLink({ it, active, className }) {
  if (it.href) {
    return (
      <a href={BASE + it.href} target="_blank" rel="noopener" className={className}>
        <Ic name={it.icon} /> {it.label}
      </a>
    );
  }
  return (
    <Link href={'/' + it.slug} className={className}>
      <Ic name={it.icon} /> {it.label}
    </Link>
  );
}

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const active = (slug) => path === '/' + slug;

  return (
    <>
      <header className="hdr">
        <div className="hdr-in">
          <Link className="logo" href="/">개발자<span>가이드</span></Link>
          <nav className="nav">
            {NAV.map((g) => (
              <div className="navitem" key={g.sec}>
                <button><Ic name={g.icon} size={15} /> {g.sec} <span className="caret">▾</span></button>
                <div className="dropdown">
                  {g.items.map((it) => (
                    <NavLink key={it.slug} it={it}
                      className={active(it.slug) ? 'active' : ''} />
                  ))}
                </div>
              </div>
            ))}
          </nav>
          <Link className="ghost right" href="/roadmap">학습 시작</Link>
          <button className="hamb" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
        </div>
      </header>

      <div className={'drawer' + (open ? ' open' : '')} onClick={() => setOpen(false)}>
        {NAV.map((g) => (
          <div key={g.sec}>
            <div className="navsec"><Ic name={g.icon} size={14} /> {g.sec}</div>
            {g.items.map((it) => (
              <NavLink key={it.slug} it={it}
                className={active(it.slug) ? 'active' : ''} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
