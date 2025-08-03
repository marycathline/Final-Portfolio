import React from "react";

const Contact = () => {
  return (
    <section id="contact" className=" py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Contact Me
        </h2>

        <form
          action="https://formsubmit.co/marycathln@gmail.com"
          method="POST"
          className="space-y-6"
        >
          {/* 🔒 FormSubmit hidden fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://yourdomain.com/thanks" />
          <input type="text" name="_honey" style={{ display: "none" }} />

          {/* ✏️ Name Field */}
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border rounded px-4 py-3"
              placeholder="Your name"
            />
          </div>

          {/* 📧 Email Field */}
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border rounded px-4 py-3"
              placeholder="you@example.com"
            />
          </div>

          {/* 💬 Message Field */}
          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full border rounded px-4 py-3"
              placeholder="Type your message..."
            ></textarea>
          </div>

          {/* 🚀 Submit */}
          <button
            type="submit"
            className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow hover:bg-gray-100"
          >
            Send Message
          </button>

          {/* 🕊️ Fallback Text */}
          <p className="text-sm text-gray-500 text-center mt-4">
            After submission, you’ll be redirected to a thank-you page. If not, check your inbox!
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
