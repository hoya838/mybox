/** @type {import('next').NextConfig} */
// GitHub Pages(프로젝트 페이지)는 /mybox 하위경로로 서빙 → 빌드 시 PAGES_BASE_PATH 주입.
// 로컬 dev·Vercel(루트 서빙)에서는 빈 값이라 영향 없음.
const basePath = process.env.PAGES_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
};

export default nextConfig;
