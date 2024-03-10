import SkillCard from "@/components/skillCard/SkillCard";
import skills from "@/data/skills.json";

export default function SkilsPage() {
  return (
    <main className="h-100vh py-20 flex flex-wrap justify-center align-center">
      {skills.map((skill) => {
        return (
          <SkillCard name={skill.name} src={skill.src} href={skill.href} />
        );
      })}
    </main>
  );
}
