import ContactForm from "@/components/ContactForm";

function About() {
  return (
    
    <section className="flex max-w-[100vw] md:max-w-none md:h-full flex-col md:flex-row">
      <div className="w-full border-r border-lines md:w-1/4">
        <p className="flex gap-3 border border-lines py-[10px] px-4 text-white">
          <i className="ri-arrow-down-s-fill"></i> contact-info
        </p>
        
        <p className="flex gap-2 py-4 px-3 text-secondary1 ">
          <i className="ri-mail-fill"></i>
          <span className="cursor-pointer break-all hover:underline">
            luciano.bicaku2307@gmail.com
          </span>
        </p>
        <p className="flex gap-2 py-4 px-3 text-secondary1">
          <i className="ri-phone-fill"></i>355688030642
        </p>
        <p className="flex gap-2 py-4 px-3 text-secondary1">
          <i className="ri-map-pin-fill"></i> Tirana, Albania
        </p>
      </div>
      <div className="flex w-full flex-wrap md:w-3/4">
        <div className="w-full border-r border-lines md:w-1/2">
          <p
            className="text-white flex  gap-3 border border-lines py-[10px] px-4 transition-colors duration-300 ease-in-out"
          >
            <i className="ri-arrow-down-s-fill"></i> personal-info
          </p>

          <div className="py-4 pl-9 pr-8">
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
          </div>
        </div>
        <div className="w-full border-r border-lines md:w-1/2">
          <p className=" text-white flex border border-lines py-[10px] px-4 transition-colors duration-300 ease-in-out">
          <i className="ri-arrow-down-s-fill"></i> contact-me
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default About;
