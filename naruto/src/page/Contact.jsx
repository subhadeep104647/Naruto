import React from "react";
import { motion } from "framer-motion";
import { Mail, Globe, Phone } from "lucide-react";

const Contact = () => {
  const contacts = [
    {
      icon: <Mail size={28} />,
      title: "Email",
      value: "yourmail@gmail.com",
      link: "mailto:yourmail@gmail.com",
      color: "from-red-500 to-orange-400",
    },
    {
      icon: <Github size={28} />,
      title: "GitHub",
      value: "github.com/yourusername",
      link: "https://github.com/yourusername",
      color: "from-gray-500 to-gray-300",
    },
    {
      icon: <Linkedin size={28} />,
      title: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      link: "https://linkedin.com/in/yourprofile",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: <Globe size={28} />,
      title: "Portfolio",
      value: "yourwebsite.com",
      link: "https://yourwebsite.com",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: <Phone size={28} />,
      title: "Phone",
      value: "+91 XXXXX XXXXX",
      link: "tel:+91XXXXXXXXXX",
      color: "from-green-500 to-emerald-400",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl w-full rounded-3xl bg-black/40 backdrop-blur-xl border border-gray-800 p-10"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center text-5xl md:text-7xl font-serif tracking-[12px] bg-gradient-to-r from-orange-400 via-yellow-300 to-red-500 bg-clip-text text-transparent"
        >
          CONTACT
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-gray-400 mt-5 text-lg"
        >
          Connect With The Creator Of Naruto Legends
        </motion.p>

        {/* Quote */}
        <div className="text-center mt-14">
          <h2 className="text-2xl md:text-4xl italic text-orange-300">
            "The Moment People Come To Know Love,
            <br />
            They Run The Risk Of Carrying Hate."
          </h2>

          <p className="text-gray-500 mt-4">— Obito Uchiha</p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {contacts.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              className="bg-white/5 border border-gray-700 rounded-2xl p-6 backdrop-blur-lg"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-r ${item.color}`}
              >
                {item.icon}
              </div>

              <h2 className="text-xl text-white mt-5">
                {item.title}
              </h2>

              <p className="text-gray-400 mt-2 break-all">
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="mt-20">
          <h2 className="text-center text-3xl text-yellow-300 tracking-widest mb-8">
            SEND A MESSAGE
          </h2>

          <div className="grid gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-white/5 border border-gray-700 rounded-xl p-4 text-white outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-white/5 border border-gray-700 rounded-xl p-4 text-white outline-none"
            />

            <textarea
              rows="6"
              placeholder="Your Message..."
              className="bg-white/5 border border-gray-700 rounded-xl p-4 text-white outline-none resize-none"
            />

            <button className="bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 text-black font-bold py-4 rounded-xl hover:scale-105 transition">
              SEND MESSAGE
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 border-t border-gray-800 pt-8">
          <h2 className="text-2xl tracking-[8px] bg-gradient-to-r from-orange-400 via-yellow-300 to-red-500 bg-clip-text text-transparent">
            NARUTO LEGENDS
          </h2>

          <p className="text-gray-500 mt-4">
            Crafted with ❤️ using React, Framer Motion & Tailwind CSS
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;