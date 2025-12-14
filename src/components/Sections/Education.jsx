import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiAward, FiCalendar } from 'react-icons/fi';
import { education } from '../../data/education';

const Education = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Education & <span className="text-blue-600">Certifications</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic background and professional certifications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <FiBook className="text-blue-600 text-xl" />
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                      <FiAward className="mr-1" />
                      {edu.grade}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">{edu.degree}</h3>
                <p className="text-gray-600 mb-4">{edu.institution}</p>

                <div className="flex items-center text-gray-500 mb-4">
                  <FiCalendar className="mr-2" />
                  <span>{edu.period}</span>
                </div>

                <p className="text-gray-600 text-sm">{edu.description}</p>
              </div>

              <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
                <span className="text-sm text-gray-500">{edu.location}</span>
              </div>
            </motion.div>
          ))}
        </div>

       {/* Certifications */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
>
  <h3 className="text-2xl font-bold mb-6">Certifications</h3>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
      <h4 className="font-semibold mb-1">Machine Learning</h4>
      <p className="text-blue-100 text-sm">Infosys SpringBoard</p>
    </div>

    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
      <h4 className="font-semibold mb-1">Cloud Computing with AWS</h4>
      <p className="text-blue-100 text-sm">Infosys SpringBoard</p>
    </div>

    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
      <h4 className="font-semibold mb-1">Data Structures using C</h4>
      <p className="text-blue-100 text-sm">Udemy</p>
    </div>

    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
      <h4 className="font-semibold mb-1">Web Development</h4>
      <p className="text-blue-100 text-sm">Apna College</p>
    </div>

    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
      <h4 className="font-semibold mb-1">Tableau & Power BI</h4>
      <p className="text-blue-100 text-sm">Certisured</p>
    </div>
  </div>
</motion.div>

      </div>
    </section>
  );
};

export default Education;