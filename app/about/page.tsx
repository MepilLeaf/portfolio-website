import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="mx-36 my-10">
      <section className="flex flex-row justify-start items-center mb-32">
        <Image
          className="rounded-lg mr-20"
          src="/images/headshot.JPG"
          alt="picture of myself"
          width="450"
          height="450"
        />
        <div className="flex flex-col">
          <p className="mb-10 text-lg">
            Hello, I’m John! I live in Edmonds, Washington, and I am a software
            developer. I have loved coding from a young age. From coding with
            blocks to writing my first lines of JavaScript, I always enjoyed
            creating, debugging, and discussing code. I completed BrainStation
            {"'"}s software engineering bootcamp and am now in the process of
            diving into the industry.
          </p>
          <div className="bg-[color:var(--emerald)] w-[80%] h-5 self-start mb-10 relative left-[-3rem]"></div>
          <p className="mb-10 text-lg">
            <span className="font-bold text-xl">Welcome to my website!</span>{" "}
            Here you can find my projects and what skills I have used. You will
            also find links to my Linkedin and GitHub below. If you want to
            contact me, send me a message on LinkedIn or send me an email with
            the button below.
          </p>
          <div className="bg-[color:var(--emerald)] w-[80%] h-5 self-end relative right-[-3rem]"></div>
        </div>
      </section>
    </main>
  );
}
