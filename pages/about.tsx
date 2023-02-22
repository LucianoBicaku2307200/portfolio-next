import ContactInfo from "@/components/ContactInfo";
import { CopyBlock } from "react-code-blocks";

function About() {
  const CodeSnippest = `import { useState, useEffect } from 'react';
const useProgrammingHumor = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    setJoke('Why do programmers prefer dark mode? Because light attracts bugs.');
  }, []);

  return joke;
};

export default useProgrammingHumor;`;

  const customTheme = {
    lineNumberColor: `#f8f8f2`,
    lineNumberBgColor: `#2b2b2b`,
    backgroundColor: `transparent`,
    textColor: `#607B96`,
    substringColor: `#f8f8f2`,
    keywordColor: `#dcc6e0`,
    attributeColor: `#ffd700`,
    selectorAttributeColor: `#dcc6e0`,
    docTagColor: `#f8f8f2`,
    nameColor: `#ffa07a`,
    builtInColor: `#f5ab35`,
    literalColor: `#f5ab35`,
    bulletColor: `#abe338`,
    codeColor: `#f8f8f2`,
    additionColor: `#abe338`,
    regexpColor: `#ffa07a`,
    symbolColor: `#abe338`,
    variableColor: `#ffa07a`,
    templateVariableColor: `#ffa07a`,
    linkColor: `#f5ab35`,
    selectorClassColor: `#ffa07a`,
    typeColor: `#f5ab35`,
    stringColor: `#FEA55F`,
    selectorIdColor: `#ffa07a`,
    quoteColor: `#d4d0ab`,
    templateTagColor: `#f8f8f2`,
    deletionColor: `#ffa07a`,
    titleColor: `#00e0e0`,
    sectionColor: `#00e0e0`,
    commentColor: `#d4d0ab`,
    metaKeywordColor: `#5565E8`,
    metaColor: `#f5ab35`,
    functionColor: `#5565E8`,
    numberColor: `#f5ab35`,
  };

  return (
    <section className="flex max-w-[100vw] flex-col md:h-full md:max-w-none md:flex-row">
      <ContactInfo />
      <div className="flex w-full flex-wrap md:w-3/4">
        <div className="w-full border-r border-lines md:w-1/2">
          <p className="flex gap-3  border border-lines py-[10px] px-4 text-white transition-colors duration-300 ease-in-out">
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
          <p className=" flex border border-lines py-[10px] px-4 text-white transition-colors duration-300 ease-in-out">
            <i className="ri-arrow-down-s-fill"></i> coding-joke
          </p>
          <div className="flex items-center justify-center py-4 px-[10%]">
            <CopyBlock
              text={CodeSnippest}
              language={"tsx"}
              showLineNumbers={false}
              startingLineNumber={1}
              wrapLines
              theme={customTheme}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
