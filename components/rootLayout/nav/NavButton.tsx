"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { use } from "react";

export default function NavButton({ text }: { text: string }) {
  const path: string = `/${text.toLowerCase()}`;

  console.log(usePathname(), path, usePathname() === path);

  return (
    <Link href={path}>
      <div className="group flex flex-col justify-end items-center">
        <h2 className="group-hover:translate-y-[-0.5rem] duration-300">
          {text}
        </h2>
        <div
          className={`bg-[color:var(--emerald)] w-20 h-4 rounded-md mt-2 duration-300 ${
            path === usePathname()
              ? "scale-x-[1.75] bg-[color:var(--tea-green)]"
              : ""
          }`}
        ></div>
      </div>
    </Link>
  );
}
