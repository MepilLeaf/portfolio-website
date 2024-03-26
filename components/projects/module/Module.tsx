import Image from "next/image";

export default function Module({
  name,
  description,
  images,
  skillsUsed,
}: {
  name: string;
  description: string;
  images: string[];
  skillsUsed: string[];
}) {
  images = [
    "/images/headshot.JPG",
    "/images/headshot.JPG",
    "/images/headshot.JPG",
  ];
  return (
    <div className="border-8 border-[color:var(--emerald)] w-[80vw]">
      <h2 className="text-center text-5xl font-bold my-16">{name}</h2>
      <div className="flex justify-evenly">
        {images.slice(0, 3).map((image) => {
          return (
            <Image
              className="rounded-lg"
              src={image}
              alt={image.split("/").pop() ?? "image name not found"}
              width={300}
              height={300}
              key={image}
            />
          );
        })}
      </div>
      <button type="button"></button>
    </div>
  );
}
