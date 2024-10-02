import Image from "next/image";

export default function SkillCard({
  name,
  src,
  condensed,
}: {
  name: string;
  src: string;
  condensed: boolean;
}) {
  return (
    <div
      className={`${
        condensed ? "w-[21rem]" : "mx-16 w-96"
      } group h-28 border-4 border-[color:var(--emerald)] flex items-center px-2 mb-20`}
    >
      <Image
        className="object-fit"
        alt={`${name} icon`}
        src={src}
        width={90}
        height={90}
      />
      <div className="ml-10 font-bold text-xl">{name}</div>
    </div>
  );
}
