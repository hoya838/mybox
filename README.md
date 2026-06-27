# 개발자 가이드 (Next.js)

웹개발·AI·클로드코드·하네스 학습 정리 사이트.

## 실행
```
npm install
npm run dev      # localhost:3000
```

## 빌드·배포
```
npm run build    # out/ 정적 생성 (output: export)
```
- **Vercel**: 레포 연결 → 자동 배포
- **정적 호스팅**(Netlify·GitHub Pages·S3): `out/` 폴더 올리면 끝

## 구조
- `app/` — 라우트(App Router). `[slug]/page.js`가 content/ HTML 렌더
- `content/*.html` — 페이지별 내용(여기만 고치면 됨)
- `app/nav.ts` — 사이드바 메뉴 정의(새 페이지 추가 시 여기 + content/ 파일)
- `components/Sidebar.js` — 사이드바(현재 페이지 active)
- `app/globals.css` — Notion 디자인
