import emailjs from "emailjs-com";

const ContactForm = () => {
  const submitForm = (event: any) => {
    event.preventDefault();
    // emailjs
    //   .sendForm(
    //     "gmail",
    //     process.env.NEXT_PUBLIC_TEMPLATE_ID,
    //     event.target,
    //     process.env.NEXT_PUBLIC_USER_ID
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <div className="py-4 px-4 md:pl-9 md:pr-8 w-full">
      <form onSubmit={submitForm} className="flex flex-col gap-6">
        <div className="flex flex-col flex-wrap">
          <label className="text-secondary1 w-1/2" htmlFor="name">
            _name:
          </label>
          <input
            className="mt-2 rounded-lg w-11/12 border border-secondary1 bg-primary3 py-[10px] px-4"
            name="name"
            id="name"
            type="text"
            placeholder="Name"
          />
          <span></span>
        </div>
        <div className="flex flex-col  flex-wrap">
          <label className="text-secondary1 w-1/2" htmlFor="company">
            _company-name:
          </label>
          <input
            className="mt-2 rounded-lg w-11/12 border border-secondary1 bg-primary3 py-[10px] px-4"
            name="company"
            id="company"
            type="text"
            placeholder="Company Name"
          />
        </div>

        <div className="flex flex-col  flex-wrap">
          <label className="text-secondary1  w-1/2">_email:</label>
          <input
            className="mt-2 rounded-lg w-11/12 border border-secondary1 bg-primary3 py-[10px] px-4"
            name="email"
            id="email"
            type="text"
            placeholder="Email"
          />
        </div>

        <div className="flex flex-col  flex-wrap">
          <label className="text-secondary1 w-1/2" htmlFor="subject">
            _subject:
          </label>
          <input
            className="mt-2 rounded-lg w-11/12 border border-secondary1 bg-primary3 py-[10px] px-4"
            name="subject"
            id="subject"
            type="text"
            placeholder="Subject"
          />
        </div>

        <div className="flex flex-col  flex-wrap">
          <label className="text-secondary1 w-1/2" htmlFor="message">
            _message:
          </label>
          <textarea
            className="mt-2 rounded-lg w-11/12 border border-secondary1 bg-primary3 py-[10px] px-4"
            name="message"
            id="message"
            placeholder="Message"
            rows={5}
          />
        </div>

        <button
          className="self-start rounded-lg border border-accent1 bg-accent1 px-3 py-2 text-sm text-primary2 transition-all duration-300 ease-in-out hover:bg-transparent hover:text-white"
          type="submit"
        >
          submit-message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
