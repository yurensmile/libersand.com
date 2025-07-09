"use client";

import React, { useEffect, useRef } from "react";
import { Send } from "lucide-react";
import PageTitle from "@/components/page-title";
import config from "@/config";
import { sendGTMEvent } from "@next/third-parties/google";

const { title } = config;

import "@/styles/contact/map-box.css";

/**
 * TODO: #341 still need to update with another method to avoid client side not available metadata
 * export const metadata: Metadata = {
 *   title: `Contact | ${title}`,
 * };
 */

function Contact() {
  useEffect(() => {
    document.title = `Contact | ${title}`;
  }, [title]);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    sendGTMEvent({ event: "message submit", value: inputRef.current?.value });

    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <article>
      <PageTitle title="联系我" />
      <section className="mb-[10px]">
       

        <h3 className="text-white-2 text-2xl font-bold mb-[20px]">
          Contact Form
        </h3>
        <form onSubmit={onSubmit} className="form">
          <div className="input-wrapper">
            <input
              type="text"
              name="Full Name"
              className="form-input"
              placeholder="Full name"
              required
            />
            <input
              type="email"
              name="Email"
              className="form-input"
              placeholder="Email address"
              required
            />
          </div>
          <textarea
            name="Message"
            className="form-input"
            placeholder="Your Message"
            required
            ref={inputRef}
          ></textarea>
          <button
            className="form-btn"
            type="submit"
            disabled={result === "Sending...."}
          >
            <Send />
            <span>
              {result === ""
                ? "发送消息"
                : result === "Sending...."
                  ? "发送中..."
                  : result === "Form Submitted Successfully"
                    ? "消息已发送!"
                    : result}
            </span>
          </button>
        </form>
      </section>
    </article>
  );
}

export default Contact;
