import Link from 'next/link';

export default function Landing() {
  return (
    <section className="landing">
      <div className="blob b1" />
      <div className="blob b2" />
      <div className="blob b3" />
      <div className="inner">
        <span className="eyebrow">입문 → 실무 → AI 도구</span>
        <h1>코딩 0에서<br />AI 시대 개발자까지</h1>
        <p>
          웹개발(프론트·백엔드·DB)부터 AI·LLM, 클로드코드·코덱스·하네스 설계까지.
          언어별 기초→심화, 예문과 쉬운 해석으로 정리한 학습 가이드.
        </p>
        <div className="cta">
          <Link className="btn p" href="/roadmap">로드맵부터 시작</Link>
          <Link className="btn g" href="/javascript">언어 바로가기</Link>
        </div>
      </div>
    </section>
  );
}
