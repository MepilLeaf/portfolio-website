export default function PopUp({
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
  return (
    <div className="bg-[#00000050] fixed top-0 w-full h-full flex justify-center">
      <article className="w-[50vw] h-[100vh] overflow-y-auto border-8 border-[color:var(--emerald)] bg-[color:var(--background-black)]">
        <button type="button">Back</button>
      </article>
    </div>
  );
}
