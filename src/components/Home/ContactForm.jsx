import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { portfolioService } from '../../services/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import Button from '../UI/Button';
import { Phone, Mail, LocationEdit } from 'lucide-react';
import emailjs from 'emailjs-com';




const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');
  setSuccess(false);

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setSuccess(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  } catch (err) {
    console.error('EmailJS error:', err);
    setError('Failed to send message. Please try again later.');
  } finally {
    setLoading(false);
  }
};


  const contactInfo = [
    {
      title: "Email",
      detail: "adithya.prabhakar2004@gmail.com",
      link: "mailto:adithya.prabhakar2004@gmail.com"
    },
    {
      title: "Phone",
      detail: "+91 9972324948",
      link: "tel:+919972324948"
    },
    {
      title: "Location",
      detail: "Bangalore, India",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            If you feel I'm fit for the role, feel free to reach out using the form below or mail me!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              Let's Connect
            </h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-blue-600 text-xl">
                      {index === 0 ? <Mail className="w-6 h-6" /> : index === 1 ? <Phone className="w-6 h-6" /> : <LocationEdit className="w-6 h-6" />}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{info.title}</h4>
                    <a 
                      href={info.link}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {info.detail}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
  <h4 className="text-xl font-bold text-gray-800 mb-4">
    Why I’m a Good Fit for the Role
  </h4>

  <ul className="space-y-3">
    <li className="flex items-start">
      <FiCheckCircle className="text-green-500 mr-3 mt-1" />
      <span className="text-gray-600">
        Strong foundation in computer science fundamentals including data structures,
        algorithms, and object-oriented programming.
      </span>
    </li>

    <li className="flex items-start">
      <FiCheckCircle className="text-green-500 mr-3 mt-1" />
      <span className="text-gray-600">
        Hands-on experience building full-stack applications using the MERN stack,
        with real-world internship exposure.
      </span>
    </li>

    <li className="flex items-start">
      <FiCheckCircle className="text-green-500 mr-3 mt-1" />
      <span className="text-gray-600">
        Proven ability to integrate software with hardware through IoT and
        real-time data processing projects.
      </span>
    </li>

    <li className="flex items-start">
      <FiCheckCircle className="text-green-500 mr-3 mt-1" />
      <span className="text-gray-600">
        Experience with version control, collaborative development workflows,
        and CI/CD pipelines.
      </span>
    </li>

    <li className="flex items-start">
      <FiCheckCircle className="text-green-500 mr-3 mt-1" />
      <span className="text-gray-600">
        Research-oriented mindset with published papers, demonstrating the ability
        to explore, implement, and document complex systems.
      </span>
    </li>
  </ul>
</div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {success ? (
                <div className="text-center py-12">
                  <FiCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSuccess(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Send me a message
                  </h3>

                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
                      <FiAlertCircle className="text-red-500 text-xl mt-0.5 flex-shrink-0" />
                      <p className="text-red-700">{error}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your Name"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 text-black py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="yourname@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Project Inquiry"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="Ask me anything..."
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="large"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 p-2"
                    >
                      {loading ? (
                        <>
                          <LoadingSpinner size="small" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FiSend />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;