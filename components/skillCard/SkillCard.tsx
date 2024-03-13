import Image from "next/image";

export default function SkillCard({
  name,
  src,
  href,
  condensed,
}: {
  name: string;
  src: string;
  href: string;
  condensed: boolean;
}) {
  return (
    <a href={href}>
      <div
        className={`${
          condensed ? "w-[21rem]" : "mx-16 w-96"
        } group h-28 border-4 border-[color:var(--emerald)] flex items-center px-2 mb-20 hover:border-[color:var(--tea-green)] hover:rotate-3 hover:scale-110 ease-out duration-300`}
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
    </a>
  );
}
