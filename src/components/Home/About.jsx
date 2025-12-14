import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiTarget, FiAward } from 'react-icons/fi';
import Card from '../UI/Card';
import LearningTimelineChart from './LearningTimelineChart';

const About = () => {
  const aboutCards = [
    {
      icon: FiUser,
      title: 'Who I Am',
      description:
        'Computer Science Engineering student with strong foundations in MERN stack development, backend systems, and data structures. Experienced in building scalable web and IoT applications.',
    },
    {
      icon: FiTarget,
      title: 'What I Do',
      description:
        'I work across full-stack development, cloud deployment, and IoT systems, integrating software and hardware to solve real-world problems.',
    },
    {
      icon: FiAward,
      title: 'What Sets Me Apart',
      description:
        'Published research combining embedded systems, full-stack development, and machine learning, with practical industry internship experience.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600">
            A snapshot of my academic journey, technical skill set, and hands-on experience
            in building impactful software and IoT systems.
          </p>
        </motion.div>

        {/* Core Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {aboutCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Card key={i} hover>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {card.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Journey + Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              My Journey
            </h3>
            <p className="text-gray-600 mb-4">
              My interest in programming began early with Java during school, followed by
              learning C++ in pre-university education. This foundation led me to pursue
              Computer Science Engineering at DSATM.
            </p>
            <p className="text-gray-600 mb-4">
              During my degree, I expanded into MERN stack development, backend systems,
              cloud deployment, AI/ML concepts, and IoT-based real-time systems.
            </p>
            <p className="text-gray-600">
              Alongside academics, I completed industry internships and published research
              in peer-reviewed journals, applying theory to real-world challenges.
            </p>
          </div>

          <div className="space-y-4">
            <Card>
              <strong className="text-gray-900">Education</strong>
              <p className="text-gray-600 text-sm mt-1">
                BE in Computer Science Engineering (2022 – Present)<br />
                Dayananda Sagar Academy of Technology & Management<br />
                CGPA: 8.83 / 10
              </p>
            </Card>

            <Card>
              <strong className="text-gray-900">Internships</strong>
              <p className="text-gray-600 text-sm mt-1">
                Software Developer Intern – Teamlease Services Ltd.<br />
                WordPress Developer Intern – Dopetech Solutions
              </p>
            </Card>

            <Card>
              <strong className="text-gray-900">Research & Publications</strong>
              <p className="text-gray-600 text-sm mt-1">
                IJRPR, IJSREM – IoT, LoRa communication, and AQI monitoring systems
              </p>
            </Card>
          </div>
        </div>

        {/* Timeline Chart */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Learning & Skill Evolution
          </h3>
          <LearningTimelineChart />
        </div>

      </div>
    </section>
  );
};

export default About;
