import SkillCard from "@/components/skillCard/SkillCard";
import skills from "@/data/skills.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
};

export default function SkilsPage() {
  return (
    <main className="py-20 flex flex-wrap justify-center align-center">
      {skills.map((skill) => {
        return (
          <SkillCard
            name={skill.name}
            src={skill.src}
            condensed={false}
            key={skill.name}
          />
        );
      })}
    </main>
  );
}
