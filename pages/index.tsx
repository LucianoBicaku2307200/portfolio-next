import Link from "next/link";
export default function Home() {
  return (
    <section className="flex h-full min-h-full w-full items-center justify-center ">
      <div className="lg:8/12 flex w-10/12 flex-wrap md:w-9/12">
        <div className="flex w-full flex-col justify-center md:w-1/2">
          <h3 className="text-lg">Hi all. I am</h3>
          <h1 className="text-6xl">Luciano Bicaku</h1>
          <h2 className="mb-20 text-xl text-accent2 md:text-3xl">
            {`>`} Front-end developer
          </h2>
          <p className="text-secondary1">
            // Big Commerce Developer "Certified"
          </p>
          <p className="text-secondary1">
            // ReactJs, NextJs, NodeJs, Typecript, Web3 enthusiast
          </p>
          <p className="text-secondary1">
            // you can also view my resume
            <Link
              className="ml-3 text-accent3 underline"
              target={"_blank"}
              href="/LucianoBicakuCV.pdf"
              locale={false}
            >
              Resume
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
