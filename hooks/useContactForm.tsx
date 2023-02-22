import { useState } from "react";
import emailjs from "emailjs-com";
import { GetServerSideProps } from "next";
type ContactFormInputs = {
  name: string;
  company: string;
  email: string;
  subject: string;
  message: string;
};

type ContactFormErrors = {
  name: string;
  company: string;
  email: string;
  subject: string;
  message: string;
};

const useContactForm = ({ contactFormCallback }: any) => {
  const [inputs, setInputs] = useState<ContactFormInputs>({
    name: "",
    company: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({
    name: "",
    company: "",
    email: "",
    subject: "",
    message: "",
  });

  const resetForm = () => {
    setInputs({
      name: "",
      company: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const validateInput = (fieldName: string, value: string): string => {
    let error = "";
    switch (fieldName) {
      case "name":
        if (!value) {
          error = "Name is required";
        }
        break;
      case "company":
        if (!value) {
          error = "Company is required";
        }
        break;
      case "email":
        if (!value) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Email is invalid";
        }
        break;
      case "subject":
        if (!value) {
          error = "Subject is required";
        }
        break;
      case "message":
        if (!value) {
          error = "Message is required";
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateInput(name, value),
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formIsValid = Object.keys(inputs).every(
      (inputName) => inputs[inputName as keyof ContactFormInputs].length > 0
    );
    if (formIsValid && !hasErrors()) {
      console.log(
        "Submitting form",
        inputs,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        process.env.NEXT_PUBLIC_USER_ID
      );

      contactFormCallback(inputs);

      // if (event.target instanceof HTMLFormElement) {
      //   emailjs
      //     .sendForm(
      //       "gmail",
      //       process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "",
      //       event.target,
      //       process.env.NEXT_PUBLIC_USER_ID ?? ""
      //     )
      //     .then(
      //       (result) => {
      //         contactFormCallback();
      //       },
      //       (error) => {
      //         console.log(error.text);
      //       }
      //     );
      // }
      resetForm();
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: validateInput("name", inputs.name),
        company: validateInput("company", inputs.company),
        email: validateInput("email", inputs.email),
        subject: validateInput("subject", inputs.subject),
        message: validateInput("message", inputs.message),
      }));
    }
  };

  const hasErrors = () => {
    return Object.keys(errors).some(
      (errorName) => errors[errorName as keyof ContactFormErrors].length > 0
    );
  };

  return {
    inputs,
    errors,
    handleInputChange,
    handleSubmit,
  };
};

export default useContactForm;
