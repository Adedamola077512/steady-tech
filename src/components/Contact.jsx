
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello STEADY TECH!

My name is ${formData.name}.
My phone number is ${formData.phone}.

Enquiry:
${formData.message}`;

    const whatsappUrl = `https://wa.me/2349066151823?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");

    setFormData({
      name: "",
      phone: "",
      message: "",
    });
  };

  const contactDetails = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Our Location",
      detail: "No. 10, Oshitelu Street, Computer Village, Ikeja, Lagos.",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Call Us",
      detail: "09066151823",
    },
    {
      icon: <FaClock />,
      title: "Business Hours",
      detail: "Open daily, 8:00 AM – 8:00 PM",
    },
  ];

  return (
    <section id="contact" className="bg-[#F7F9FC] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#174EA6]">
            Get In Touch
          </span>

          <h2 className="mb-5 text-3xl font-bold text-[#101D38] md:text-4xl">
            Let's Talk About Your
            <span className="text-[#174EA6]"> Technology Needs.</span>
          </h2>

          <p className="text-base leading-7 text-gray-600">
            Have a question, need a new device or looking for technical support?
            We'd love to hear from you.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-2xl bg-[#101D38] p-8 text-white md:p-10">
            <h3 className="mb-3 text-2xl font-bold">
              Contact Information
            </h3>

            <p className="mb-10 text-sm leading-7 text-gray-300">
              Reach out to us today. Our team is ready to assist you.
            </p>

            <div className="space-y-8">
              {contactDetails.map((item, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#174EA6] text-xl">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold">{item.title}</h4>
                    <p className="text-sm leading-6 text-gray-300">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/2349066151823"
              target="_blank"
              rel="noreferrer"
              className="mt-12 inline-flex items-center gap-3 rounded-lg bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600"
            >
              <FaWhatsapp className="text-xl" />
              Chat With Us
            </a>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:p-10">
            <h3 className="mb-3 text-2xl font-bold text-[#101D38]">
              Send Us a Message
            </h3>

            <p className="mb-8 text-sm leading-6 text-gray-500">
              Fill in the details below and we'll get back to you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#101D38]">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#174EA6] focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#101D38]">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#174EA6] focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#101D38]">
                  Your Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows="5"
                  required
                  className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#174EA6] focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#174EA6] px-6 py-4 font-semibold text-white transition hover:bg-[#101D38]"
              >
                Send Message <FaPaperPlane />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
