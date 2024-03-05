import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="mx-36 my-10 h-screen">
      <section className="flex flex-row justify-start items-center ">
        <Image
          className="rounded-lg mr-20"
          src="/images/headshot.JPG"
          alt="picture of myself"
          width="450"
          height="450"
        />
        <div className="flex flex-col">
          <p className="mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus
            et molestie ac feugiat sed lectus vestibulum mattis. Ut tortor
            pretium viverra suspendisse potenti nullam ac tortor vitae.
            Scelerisque viverra mauris in aliquam sem fringilla ut. Turpis
            cursus in hac habitasse. Mauris pharetra et ultrices neque ornare
            aenean euismod elementum. Consectetur adipiscing elit pellentesque
            habitant morbi tristique senectus. Purus faucibus ornare suspendisse
            sed nisi lacus sed viverra. Diam sollicitudin tempor id eu nisl.
            Molestie a iaculis at erat pellentesque. Ut sem nulla pharetra diam
            sit amet nisl suscipit adipiscing. Sed blandit libero volutpat sed
            cras ornare. Ut pharetra sit amet aliquam id diam maecenas
            ultricies. Leo vel fringilla est ullamcorper eget nulla. Nunc
            lobortis mattis aliquam faucibus purus in massa tempor nec. Purus
            sit amet volutpat consequat mauris nunc. Odio ut sem nulla pharetra
            diam sit amet nisl suscipit. Cursus mattis molestie a iaculis at
            erat pellentesque adipiscing commodo. Amet massa vitae tortor
            condimentum lacinia quis. Arcu non sodales neque sodales ut etiam
            sit amet nisl. Et netus et malesuada fames ac turpis. Lorem mollis
            aliquam ut porttitor leo a diam. Accumsan in nisl nisi scelerisque
            eu. Eget duis at tellus at. Elementum pulvinar etiam non quam lacus
            suspendisse faucibus. Nascetur ridiculus mus mauris vitae ultricies.
            Egestas purus viverra accumsan in. Id venenatis a condimentum vitae.
            Quis lectus nulla at volutpat. Pulvinar sapien et ligula ullamcorper
            malesuada proin libero nunc. Varius vel pharetra vel turpis nunc
            eget lorem. Eget nunc lobortis mattis aliquam faucibus purus.
            Viverra tellus in hac habitasse platea dictumst. Est lorem ipsum
            dolor sit amet. Tincidunt arcu non sodales neque sodales ut etiam
            sit. Fames ac turpis egestas integer eget.
          </p>
          <div className="bg-[color:var(--emerald)] w-[80%] h-10 self-end"></div>
        </div>
      </section>
    </main>
  );
}
