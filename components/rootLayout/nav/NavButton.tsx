export default function NavButton({ text }: { text: string }) {
  return (
    <div className="flex flex-col justify-end items-center">
      <h2>{text}</h2>
      <div className="bg-[color:var(--emerald)] w-20 h-5 rounded-lg"></div>
    </div>
  );
}
