import useContactForm from "@/hooks/useContactForm";

const ContactForm = (contactFormCallback: any) => {
  const { inputs, errors, handleInputChange, handleSubmit } =
    useContactForm(contactFormCallback);
  return (
    <div className="w-full py-4 px-4 md:pl-9 md:pr-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col  flex-wrap">
          <label className="w-1/2 text-secondary1" htmlFor="name">
            _name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={inputs.name}
            onChange={handleInputChange}
            className={`mt-2 w-11/12 rounded-lg border border-secondary1 bg-primary3 py-[10px] px-4 ${
              errors.name && "border-red-500"
            }`}
          />
          {errors.name && (
            <span className="mt-1 text-sm text-red-500">{errors.name}</span>
          )}
        </div>
        <div className="flex flex-col  flex-wrap">
          <label className="w-1/2 text-secondary1" htmlFor="company">
            _company:
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={inputs.company}
            onChange={handleInputChange}
            className={`mt-2 w-11/12 rounded-lg border border-secondary1 bg-primary3 py-[10px] px-4 ${
              errors.company && "border-red-500"
            }`}
          />
          {errors.company && (
            <span className="mt-1 text-sm text-red-500">{errors.company}</span>
          )}
        </div>
        <div className="flex flex-col  flex-wrap">
          <label className="w-1/2 text-secondary1" htmlFor="email">
            _email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={inputs.email}
            onChange={handleInputChange}
            className={`mt-2 w-11/12 rounded-lg border border-secondary1 bg-primary3 py-[10px] px-4 ${
              errors.email && "border-red-500"
            }`}
          />
          {errors.email && (
            <span className="mt-1 text-sm text-red-500">{errors.email}</span>
          )}
        </div>
        <div className="flex flex-col  flex-wrap">
          <label className="w-1/2 text-secondary1" htmlFor="subject">
            _subject:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={inputs.subject}
            onChange={handleInputChange}
            className={`mt-2 w-11/12 rounded-lg border border-secondary1 bg-primary3 py-[10px] px-4 ${
              errors.subject && "border-red-500"
            }`}
          />
          {errors.subject && (
            <span className="mt-1 text-sm text-red-500">{errors.subject}</span>
          )}
        </div>

        <div className="flex flex-col  flex-wrap">
          <label className="w-1/2 text-secondary1" htmlFor="message">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={inputs.message}
            onChange={handleInputChange}
            rows={5}
            className={`mt-2 w-11/12 rounded-lg border border-secondary1 bg-primary3 py-[10px] px-4 ${
              errors.message && "border-red-500"
            }`}
          ></textarea>
          {errors.message && (
            <span className="mt-1 text-sm text-red-500">{errors.message}</span>
          )}
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
