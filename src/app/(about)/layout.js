import SkillsRoll from "@/src/components/About/SkillsRoll";


const skills = [
  "next.js",
  "tailwind css",
  "figma",
  "javaScript",
  "web design",
  "typescript",
  "wireframing",
  "typescript",
  "html",
  "css",
  "java"
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <SkillsRoll insights={skills} />
      {children}
    </main>
  );
}
