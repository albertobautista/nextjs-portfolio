import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";

const query = groq`
  *[_type == "skill"]
`;

export default async function Home() {
  const skills = await client.fetch(query);
  console.log(skills);
  return (
    <>
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
              src="https://i.imgur.com/e2yvD6A.png"
              alt="logo"
            />
          </div>
        </footer>
      </Link>
    </>
  );
}
