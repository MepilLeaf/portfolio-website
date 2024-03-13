import { useState } from "react";
import Tab from "./Tab";
import Image from "next/image";
import skills from "@/data/skills.json";
import SkillCard from "@/components/skillCard/SkillCard";

export default function PopUp({
  name,
  description,
  images,
  skillsUsed,
  githubLink,
  resetSelected,
}: {
  name: string;
  description: string;
  images: string[];
  skillsUsed: string[];
  githubLink: string;
  resetSelected: () => void;
}) {
  const [tab, setTab] = useState<string>("About");

  return (
    <div className="bg-[#00000050] fixed top-0 w-full h-full flex justify-center">
      <div className="relative">
        <article className="w-[50vw] h-[100vh] overflow-y-auto border-8 border-[color:var(--emerald)] bg-[color:var(--background-black)] flex flex-col items-center py-16 px-24">
          <div className="flex justify-between w-full">
            <button
              onClick={resetSelected}
              type="button"
              className="bg-[color:var(--emerald)] p-5 rounded-lg text-[color:var(--background-black)] text-xl font-bold hover:bg-[color:var(--tea-green)] duration-300 ease-out"
            >
              Back
            </button>
            <a href={githubLink}>
              <button
                type="button"
                className="bg-[color:var(--emerald)] p-5 rounded-lg text-[color:var(--background-black)] text-xl font-bold hover:bg-[color:var(--tea-green)] duration-300 ease-out"
              >
                View On GitHub
              </button>
            </a>
          </div>
          <section className="flex flex-col items-center">
            <h2 className="text-6xl mt-10 mb-14">
              {tab === "About" ? name : tab}
            </h2>
            {tab === "About" && (
              <div>
                <Image
                  className="mr-10 mb-5 float-left rounded-lg"
                  src={images[0]}
                  alt={images[0].split("/").pop() ?? "image name not found"}
                  width={400}
                  height={400}
                />
                <p className="leading-relaxed text-md">{description}</p>
              </div>
            )}
            {tab === "Gallery" && (
              <div className="flex flex-wrap justify-evenly">
                {images.map((image) => {
                  return (
                    <Image
                      className="mb-10 rounded-lg"
                      src={image}
                      alt={image.split("/").pop() ?? "image name not found"}
                      width={300}
                      height={300}
                    />
                  );
                })}
              </div>
            )}
            {tab === "Skills Used" && (
              <div className="flex justify-between flex-wrap">
                {skillsUsed.map((skill) => {
                  const skillData = skills.find((elem) => elem.name === skill);
                  if (!skillData) return;
                  return (
                    <SkillCard
                      name={skillData.name}
                      src={skillData.src}
                      href={skillData.href}
                      condensed={true}
                    />
                  );
                })}
              </div>
            )}
          </section>
        </article>
        <div className="w-52 h-[30rem] absolute top-[8rem] left-[50vw] z-[-2] flex flex-col justify-evenly">
          <Tab name="About" tab={tab} setTab={setTab} />
          <Tab name="Gallery" tab={tab} setTab={setTab} />
          <Tab name="Skills Used" tab={tab} setTab={setTab} />
        </div>
      </div>
    </div>
  );
}
