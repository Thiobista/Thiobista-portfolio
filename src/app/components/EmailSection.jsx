"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailSubmitted(false);

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resData = await response.json().catch(() => ({}));

      if (response.ok) {
        setEmailSubmitted(true);
        e.target.reset();
        showToast("success", "Message sent successfully!");
      } else {
        const errorMessage = resData?.error || "Failed to send message.";
        showToast("error", errorMessage);
      }
    } catch (error) {
      showToast("error", "Network error. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative overflow-hidden"
    >
      <div className="hidden sm:block bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-60 w-60 md:h-80 md:w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 pointer-events-none" />

      <div className="z-10">
        <h2 className="section-heading">Let&apos;s Connect</h2>
        <p className="body-text mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-3">
          <Link
            href="https://github.com/Thiobista"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image src={GithubIcon} alt="Github Icon" className="w-8 h-8 sm:w-10 sm:h-10" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/thiobistagedefaw/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" className="w-8 h-8 sm:w-10 sm:h-10" />
          </Link>
        </div>
      </div>

      <div className="z-10 w-full min-w-0">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="text-white block mb-1 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2"
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-1 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-1 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={2}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2 resize-none h-16"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-lg w-full sm:w-auto sm:self-start transition-colors text-sm"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Your message has been sent.
            </p>
          )}
        </form>
      </div>

      {toast && (
        <div
          className={`fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-50 px-4 py-3 rounded-lg shadow-lg text-sm ${
            toast.type === "success"
              ? "bg-emerald-600 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {toast.message}
        </div>
      )}
    </section>
  );
};

export default EmailSection;
