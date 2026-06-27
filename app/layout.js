import './globals.css';
import Sidebar from '../components/Sidebar';

export const metadata = {
  title: '개발자 가이드 — 입문부터 심화까지',
  description: '웹개발·AI·클로드코드·하네스 학습 정리',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="layout">
          <Sidebar />
          <main className="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
