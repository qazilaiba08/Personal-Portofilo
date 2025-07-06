import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("Message sent! Thank you.");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch {
      setStatus("Failed to send. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-teal-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span>
            Get in Touch —{" "}
            <span className="text-pink-500">Lets Connect!</span>
          </span>
        </motion.h2>

        <p className="text-gray-300 text-lg md:text-xl">
          Have a project in mind or just want to say hi? I am always open to new
          opportunities and collaborations.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
          ></textarea>
          <Button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 mt-4"
          >
            Send Message
          </Button>
        </form>
        {status && <div className="text-teal-400 mt-2">{status}</div>}
      </div>
    </section>
  );
};

export default Contact;
