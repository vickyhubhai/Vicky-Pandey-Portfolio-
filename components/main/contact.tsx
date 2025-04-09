"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"" | "success" | "error">("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 z-10">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="w-full max-w-2xl bg-[#0E1016] p-8 rounded-2xl shadow-xl border border-[#1E2028]"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1E2028] border border-[#2E313A] text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1E2028] border border-[#2E313A] text-white focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-[#1E2028] border border-[#2E313A] text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-lg font-semibold text-white transition-all duration-300 ${
                isSubmitting
                  ? "bg-purple-700 cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-700"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitStatus === "success" && (
              <p className="mt-4 text-green-500 text-center">
                Message sent successfully!
              </p>
            )}
            {submitStatus === "error" && (
              <p className="mt-4 text-red-500 text-center">
                Failed to send message. Please try again.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}; 