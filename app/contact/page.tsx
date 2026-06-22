"use client";

import { useState } from "react";
import {
  Send,
  Mail,
  User,
  MessageSquare,
  MapPin,
  Clock,
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setStatus("");
      }, 3000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-white text-black pt-28 md:pt-40 pb-16 md:pb-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Elevate Your Brand with
            <span className="text-blue-600">
              {" "}
              Premium Printing Solutions
            </span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            At Angira Printographics, we provide high-quality Packaging
            Boxes, Labels, Stickers, Brochures, Carry Bags, Menu Cards,
            Visiting Cards, Catalogs, and complete Branding Materials
            tailored to your business needs.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { icon: "✨", text: "Creative Designs" },
              { icon: "📦", text: "Custom Packaging Solutions" },
              { icon: "⭐", text: "Premium Print Quality" },
              { icon: "🚚", text: "Reliable & Timely Delivery" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-medium text-gray-700">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            {[
              {
                icon: <MapPin size={20} />,
                text: "Delhi NCR Service Area",
              },
              {
                icon: <Mail size={20} />,
                text: "angiraprintographics2024@gmail.com",
              },
              {
                icon: <Clock size={20} />,
                text: "Quick Response & Dedicated Support",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300"
              >
                <div className="text-blue-600">{item.icon}</div>
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-xl space-y-5"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-black mb-6">
            Contact Us
          </h3>

          {/* Name */}
          <div className="relative">
            <User
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* Subject */}
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          >
            <option value="">Select Requirement</option>
            <option value="Packaging Boxes">
              Packaging Boxes
            </option>
            <option value="Labels & Stickers">
              Labels & Stickers
            </option>
            <option value="Brochures & Catalogs">
              Brochures & Catalogs
            </option>
            <option value="Carry Bags">
              Carry Bags
            </option>
            <option value="Menu Cards">
              Menu Cards
            </option>
            <option value="Branding Material">
              Branding Material
            </option>
            <option value="Other">
              Other
            </option>
          </select>

          {/* Message */}
          <div className="relative">
            <MessageSquare
              size={18}
              className="absolute left-3 top-4 text-gray-400"
            />
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your printing or packaging requirement..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl outline-none resize-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-gradient-to-r
              from-blue-600
              to-blue-700
              hover:from-blue-700
              hover:to-blue-800
              text-white
              py-4
              rounded-xl
              font-semibold
              transition-all
              duration-300
              flex
              items-center
              justify-center
              gap-2
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-1
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {loading ? (
              "Sending..."
            ) : (
              <>
                <Send size={18} />
                Send Inquiry
              </>
            )}
          </button>

          {/* Status */}
          {status === "success" && (
            <div className="bg-green-50 border border-green-200 text-green-700 p-3 rounded-xl text-center">
              ✅ Inquiry sent successfully. We'll contact you soon.
            </div>
          )}

          {status === "error" && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-xl text-center">
              ❌ Failed to send inquiry. Please try again.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}