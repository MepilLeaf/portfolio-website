export default function Tab({
  name,
  tab,
  setTab,
}: {
  name: string;
  tab: string;
  setTab: (input: string) => void;
}) {
  return (
    <div
      onClick={() => {
        setTab(name);
      }}
      className={`flex justify-end items-center bg-[color:var(--background-black)] w-72 h-32 ${
        tab === name
          ? "border-[color:var(--tea-green)]"
          : "border-[color:var(--emerald)]"
      } border-8 rounded-xl relative ${
        tab === name ? "right-[10%]" : "right-[50%]"
      } z-[-1] ${
        tab === name ? "" : "hover:right-[30%]"
      } duration-500 ease-out`}
    >
      <div className="w-[70%] flex justify-center items-center">
        <h3 className="text-2xl font-bold">{name}</h3>
      </div>
    </div>
  );
}
