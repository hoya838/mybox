export const NAV = [
  { sec: "학습", icon: "BookOpen", items: [
    { slug: "how-to-learn", label: "학습법", icon: "Lightbulb" },
    { slug: "roadmap", label: "로드맵", icon: "Map" },
    { slug: "curriculum", label: "커리큘럼 개요", icon: "List" },
    { slug: "web", label: "웹개발", icon: "Globe" },
    { slug: "ai", label: "AI·LLM", icon: "Cpu" },
    { slug: "lectures", label: "강의", icon: "GraduationCap" },
    { slug: "datastructures", label: "자료구조", icon: "GitBranch" },
    { slug: "graphify", label: "AI 지식지도", icon: "Network", href: "/graphify/" },
    { slug: "ai-5elements", label: "AI 학습 5요소", icon: "Layers" },
  ]},
  // 거꾸로 배우기 — 만드는 결과물(위)부터 기초(아래)로 내려감
  { sec: "프론트엔드", icon: "Layout", items: [
    { slug: "nextjs", label: "Next.js", icon: "Triangle" },
    { slug: "typescript", label: "TypeScript", icon: "FileType" },
    { slug: "javascript", label: "JavaScript", icon: "Braces" },
    { slug: "html-css", label: "HTML · CSS", icon: "FileCode" },
  ]},
  { sec: "백엔드", icon: "Server", items: [
    { slug: "fastapi", label: "FastAPI", icon: "Zap" },
    { slug: "python", label: "Python", icon: "FileCode2" },
    { slug: "express", label: "Express", icon: "Route" },
    { slug: "nodejs", label: "Node.js", icon: "Hexagon" },
    { slug: "postgresql", label: "PostgreSQL", icon: "Database" },
  ]},
  { sec: "실전", icon: "Rocket", items: [
    { slug: "build", label: "서비스 만들기", icon: "Rocket" },
    { slug: "board-build", label: "게시판 만들기", icon: "ClipboardList" },
  ]},
  { sec: "AI 도구", icon: "Sparkles", items: [
    { slug: "ai-tools", label: "AI 도구", icon: "Sparkles" },
    { slug: "claude-code", label: "클로드코드", icon: "Bot" },
    { slug: "codex", label: "코덱스", icon: "Terminal" },
  ]},
  { sec: "참고", icon: "Library", items: [
    { slug: "glossary", label: "용어사전", icon: "BookA" },
  ]},
];
