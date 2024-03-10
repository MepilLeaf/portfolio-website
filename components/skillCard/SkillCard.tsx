import Image from "next/image";

export default function SkillCard({
  name,
  src,
  href,
}: {
  name: string;
  src: string;
  href: string;
}) {
  return (
    <a href={href}>
      <div className="group w-96 h-28 border-4 border-[color:var(--emerald)] flex items-center px-2 mx-16 mb-20 hover:border-[color:var(--tea-green)] hover:rotate-3 hover:scale-110 card-easing duration-300">
        <Image
          className="object-fit"
          alt={`${name} icon`}
          src={src}
          width={90}
          height={90}
        />
        <div className="ml-10 font-bold text-xl">{name}</div>
      </div>
    </a>
  );
}
