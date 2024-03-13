import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-56 mb-16 flex justify-center items-center">
      <div
        className="flex justify-between items-center w-[30rem]
        "
      >
        <a href="https://www.linkedin.com/in/john-henriksen/">
          <Image
            src="/images/linkedin-icon.svg"
            alt="linkedin icon"
            width="100"
            height="100"
          />
        </a>
        <a href="https://github.com/MepilLeaf">
          <Image
            src="/images/github-icon.svg"
            alt="github icon"
            width="100"
            height="100"
          />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jehenrik13@gmail.com">
          <button
            className="w-40 h-20 bg-[color:var(--emerald)] text-[color:var(--background-black)] font-extrabold text-xl rounded-3xl hover:bg-[color:var(--tea-green)] duration-300 ease-out"
            type="button"
          >
            Email Me!
          </button>
        </a>
      </div>
    </footer>
  );
}
