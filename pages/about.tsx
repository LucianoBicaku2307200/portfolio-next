import { useState } from "react";

function About() {
  const [contactForm, setContactForm] = useState(false);

  return (
    <section className="flex h-full">
      <div className="w-10/12 border-r border-lines md:w-1/4">
        <p className="flex gap-3 border border-lines py-[10px] px-4 text-white">
          <i className="ri-arrow-down-s-fill"></i> contact-info
        </p>
        <p className="flex gap-2 py-4 px-3 text-secondary1 ">
          <i className="ri-mail-fill"></i>
          <span
            className="cursor-pointer hover:underline"
            onClick={() => setContactForm(true)}
          >
            luciano.bicaku2307@gmail.com
          </span>
        </p>
        <p className="flex gap-2 py-4 px-3 text-secondary1">
          <i className="ri-phone-fill"></i>355688030642
        </p>
        <p className="flex gap-2 py-4 px-3 text-secondary1">
          <i class="ri-map-pin-fill"></i> Tirana, Albania
        </p>
      </div>
      <div className="flex w-3/4">
        <div className="w-1/2 border-r border-lines">
          <div className="flex border-b border-lines">
            <p
              className={`flex cursor-pointer gap-3 border border-lines py-[10px] px-4 text-secondary1 transition-colors duration-300 ease-in-out hover:text-accent4 ${
                contactForm ? "" : "text-white"
              }`}
              onClick={() => setContactForm(false)}
            >
              personal-info
            </p>
            <p
              className={`flex cursor-pointer gap-3 border border-lines py-[10px] px-4 text-secondary1 transition-colors duration-300 ease-in-out hover:text-accent4 ${
                contactForm ? "text-white" : ""
              }`}
              onClick={() => setContactForm(true)}
            >
              contact-me
            </p>
          </div>
          <div className="py-4 pl-9 pr-8">
            {!contactForm ? (
              <p className="text-secondary1">
                /** <br />* I am a self-taught developer with a Bachelor's
                degreeand <br /> * prefer to learn new things,
                <br /> * challenge myself and dointeresting things that matter.{" "}
                <br /> * My energy fuels me in the pursuit of many interests,{" "}
                <br /> * hobbies, areas of study and coding skills.
                <br /> * I’m a fast learner, able to pick up new skills
                <br /> * juggle different projects and roles
                <br /> * with relative ease. I'm quietly confident,
                <br /> * naturally curious, and
                <br /> * a team player ready to help my team members.
                <br /> */
              </p>
            ) : (
              <p>contactForm</p>
            )}
          </div>
        </div>
        <div className="w-1/2">commit graph</div>
      </div>
    </section>
  );
}

export default About;
