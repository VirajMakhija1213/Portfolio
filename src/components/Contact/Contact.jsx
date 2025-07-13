import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a34dvjr",
        "template_eeg0dhd",
        form.current,
        "NI5NKQURumUQ7gdA9"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-[#0b0b14]"
    >
      <ToastContainer />

      {/* Title */}
      <div className="text-center mb-16">
        <span className="text-4xl font-bold text-purple-500 tracking-wide">CONTACT</span>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          I’d love to hear from you — feel free to reach out for opportunities, collaborations, or just to say hi!
        </p>
      </div>

      {/* Contact Form Container */}
      <div className="w-full max-w-md bg-[#131025] p-8 rounded-2xl shadow-xl border border-purple-800/30 backdrop-blur-md relative transition-all hover:shadow-purple-700/40">
        <h3 className="text-2xl font-semibold text-white text-center mb-6">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#1a172f] text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:border-purple-500 transition"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#1a172f] text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:border-purple-500 transition"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#1a172f] text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:border-purple-500 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message..."
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#1a172f] text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:border-purple-500 transition"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 hover:shadow-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
