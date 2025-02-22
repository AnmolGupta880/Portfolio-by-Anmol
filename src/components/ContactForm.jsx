// Install dependencies: npm install @formspree/react
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xanqkpdp");

  if (state.succeeded) {
    return <p className="text-green-400 text-center mt-4">Thanks for your message!</p>;
  }

  return (
    <div id="contact" className="w-full py-20 bg-gray-900 text-white flex flex-col items-center">
      <h2 className="text-4xl font-bold text-green-400 mb-5">Contact Me</h2>
      <p className="text-gray-300 text-center max-w-2xl mb-8 leading-relaxed">
      Connecting is always a better way to get the work done. Feel free to connect with me through any of my social media links or drop any remarks in the message box below. I will reply to you as fast as possible.
      </p>

      <form 
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300
                   hover:shadow-green-400/50 hover:scale-105"
      >
        {/* Email Input */}
        <label htmlFor="email" className="text-gray-300 block mb-2">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full p-3 mb-4 bg-gray-700 rounded border border-gray-600 text-white focus:outline-none 
                     focus:ring-2 focus:ring-green-400"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500" />

        {/* Message Input */}
        <label htmlFor="message" className="text-gray-300 block mb-2">Your Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="w-full p-3 mb-4 bg-gray-700 rounded border border-gray-600 text-white focus:outline-none 
                     focus:ring-2 focus:ring-green-400"
          required
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500" />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded 
                     transition-transform duration-300 hover:scale-110"
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
