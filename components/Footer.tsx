function Footer() {
  return (
    <footer className="fixed bottom-0 flex w-full justify-between border border-lines bg-primary2 text-secondary1">
      <div className="flex items-center justify-center gap-4">
        <span className="py-4 pl-5">find me in:</span>
        <a
          href="https://www.linkedin.com/in/luciano-bicaku-0403871a0/"
          target={"_blank"}
          className=" flex h-full items-center justify-center border-0 border-lines  px-3 py-4 xs:border-x"
        >
          <i className="ri-linkedin-box-fill ri-lg"></i>
        </a>
      </div>

      <a
        className="flex justify-center gap-4 border-l border-lines py-4 px-5"
        href="https://github.com/LucianoBicaku2307200"
        target={"_blank"}
      >
        <span className="hidden md:block">LucianoBicaku2307200</span>
        <i className="ri-github-fill ri-lg flex items-center justify-center"></i>
      </a>
    </footer>
  );
}

export default Footer;
