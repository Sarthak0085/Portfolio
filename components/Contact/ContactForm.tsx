"use client";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e, name, email, message, phoneNumber);

    if (form.current) {
      emailjs
        .sendForm(
          "service_rrjfi5q",
          "template_f2a774j",
          form.current,
          "el09ySEBlKxplT3io"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            toast.success("Form Submitted Successfully");
          },
          function (error) {
            console.log("FAILED...", error);
            toast.error(
              "Error while submitting the form. Please use another method"
            );
          }
        );
    }

    setName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  };

  return (
    <form
      onSubmit={onSubmit}
      ref={form}
      className="mt-12 text-xl gap-2 text-white font-medium loading-relaxed "
    >
      Hello, My name is
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        name="name"
        required
        onChange={(e) => setName(e.target.value)}
        minLength={3}
        maxLength={20}
        className="outline-none border-0 p-0 w-[100px] sm:w-[170px] md:w-[250px] mx-[1rem] mt-[2rem] focus:ring-0 placeholder:text-center placeholder:text-lg
              border-b border-gray-400 focus:border-[#55e6a5] text-[#55e6a5] bg-transparent mb-[2rem]"
      />
      and my email is
      <input
        type="email"
        placeholder="youremail@gmail.com"
        value={email}
        name="email"
        required
        onChange={(e) => setEmail(e.target.value)}
        className="outline-none border-0 p-0 w-[100px] sm:w-[170px] md:w-[250px] ml-[2rem] mr-[1rem] mt-[2rem] focus:ring-0 placeholder:text-center placeholder:text-lg
              border-b border-gray-400 focus:border-[#55e6a5] text-[#55e6a5] bg-transparent mb-[2rem]"
      />
      .You can contact with me on my Phone number :
      <input
        type="text"
        placeholder="your phone"
        name="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="outline-none border-0 w-[100px] sm:w-[170px] md:w-[250px] p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg
              border-b border-gray-400 focus:border-[#55e6a5] my-[2rem] text-[#55e6a5] bg-transparent mb-[2rem]"
      />
      or on my email and I want to discuss
      <textarea
        placeholder="anything you want to discuss"
        rows={3}
        value={message}
        name="message"
        onChange={(e) => setMessage(e.target.value)}
        className="outline-none w-full  block border-0 mt-[2rem] p-0 mx-2 focus:ring-0 placeholder:text-start placeholder:text-lg
              border-b border-gray-400 focus:border-[#55e6a5] text-[#55e6a5] bg-transparent"
      />
      <input
        type="submit"
        value="Send"
        className="mt-8 font-medium inline-block capitalize text-xl py-3 px-8 border-2 border-[#55e6a5] 
              rounded-md cursor-pointer hover:bg-[#55e6a5] text-white"
      />
      <div className="mx-[1rem] flex items-center pb-6 pt-8" aria-hidden="true">
        <div className="flex-grow border-t border-gray-100" />
        <span className="mx-2 mt-[-2px] uppercase flex-shrink text-lg text-[#55e6a5]">
          or
        </span>
        <div className="flex-grow border-t border-gray-100" />
      </div>
    </form>
  );
};

export default ContactForm;
