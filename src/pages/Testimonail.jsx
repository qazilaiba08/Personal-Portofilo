import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

export default function TestimonailSection() {
  return (
    <section id="testmonail" className="py-20 px-4 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] text-white">
      <div className="max-w-5xl mx-auto space-y-12">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center text-teal-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Testimonials
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "John Smith",
              role: "Project Manager",
              feedback:
                "Laiba's work ethic and attention to detail is outstanding. The UI/UX quality she delivers is beyond expectations."
            },
            {
              name: "Ayesha Khan",
              role: "Product Owner",
              feedback:
                "Working with Laiba was smooth and productive. She brought great ideas to the table and executed them perfectly."
            },
            {
              name: "Michael Lee",
              role: "Full Stack Developer",
              feedback:
                "Highly recommend Laiba for any frontend project. Her React skills, animations, and responsiveness are excellent."
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-black bg-opacity-40 p-6 rounded-lg shadow hover:bg-opacity-60 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <FaQuoteLeft className="text-pink-400 text-3xl mb-4" />
              <p className="text-gray-300 mb-6">{testimonial.feedback}</p>
              <h4 className="text-lg font-semibold text-teal-400">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
