import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import { useState } from "react";
import { CopyBlock } from "react-code-blocks";

interface stateType {
  name: string;
  company: string;
  email: string;
  subject: string;
  message: string;
  initial: boolean;
  submitet: boolean;
  errors: Array<string>;
}
const initialCode = `const message = {
	name: "Jonathan Davis",
    company: "awesomeComp",
	email: "jonathan-davis@gmail.com",
    subject: "Let's collaborate.",
	message: "Hey! Just checked your website and it looks awesome!"
}`;

const Contact = () => {
  const [formSubmited, setFormSubmited] = useState(false);
  const [message, setMessage] = useState(initialCode);

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

  const toggleContactForm = () => setFormSubmited(!formSubmited);

  //   const generateMessage = () =>
  //     form.initial
  //       ? initialCode
  //       : `const message = {
  // 	name: "${form.name}",
  //     company: "${form.company}",
  // 	email: "${form.email}",
  //     subject: "${form.subject}",
  // 	message: "${form.message}"
  // }`;

  const contactFormCallback = (inputs: any) => {
    toggleContactForm();
    setMessage(`const message = {
	name: "${inputs.name}",
    company: "${inputs.company}",
	email: "${inputs.email}",
    subject: "${inputs.subject}",
	message: "${inputs.message}"
}`);
  };

  return (
    <section className="flex max-w-[100vw] flex-col md:h-full md:max-w-none md:flex-row">
      <ContactInfo />
      <div className="flex w-full flex-wrap md:w-3/4">
        <div className="flex w-full flex-col border-r border-lines md:w-1/2">
          <p className=" flex border border-lines py-[10px] px-4 text-white transition-colors duration-300 ease-in-out">
            <i className="ri-arrow-down-s-fill"></i> contact-me
          </p>
          {!formSubmited ? (
            <ContactForm contactFormCallback={contactFormCallback} />
          ) : (
            <div className="mx-auto flex w-10/12 flex-1 flex-col items-center justify-center text-center">
              <h3 className="text-2xl font-medium">Thank you! 🤘</h3>
              <p className="mt-2 mb-9 text-sm text-secondary1">
                Your message has been accepted. You will recieve answer really
                soon!
              </p>
              <button
                onClick={toggleContactForm}
                className="rounded-lg border border-transparent bg-slate-600 py-2 px-3 transition duration-300 ease-in-out hover:border-white hover:bg-transparent"
              >
                send-new-message
              </button>
            </div>
          )}
        </div>
        <div className="flex w-full items-center justify-center border-r border-lines md:w-1/2">
          <div className="flex items-center justify-center py-8 px-[10%]">
            <CopyBlock
              text={message}
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
};

export default Contact;
