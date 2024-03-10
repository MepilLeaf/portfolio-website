import Image from "next/image";

export default function ProjectCard({
  name,
  description,
  images,
  skillsUsed,
  handleClick,
}: {
  name: string;
  description: string;
  images: string[];
  skillsUsed: string[];
  handleClick: (name: string) => void;
}) {
  const thumbnail: string = images[0];
  return (
    <div
      onClick={() => {
        handleClick(name);
      }}
      className="border-[15px] border-[color:var(--emerald)] w-[30vw] flex flex-col items-center py-10 hover:border-[color:var(--tea-green)] hover:scale-105 ease-in-out duration-300 rounded-lg"
    >
      <h2 className="text-center text-5xl font-bold mb-10">{name}</h2>
      <Image
        className="rounded-lg"
        src={thumbnail}
        alt={thumbnail.split("/").pop() ?? "image name not found"}
        width={350}
        height={350}
      />
    </div>
  );
}
