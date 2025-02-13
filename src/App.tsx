import { useState, useEffect, useRef, FormEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram,
  Code2,
  Palette,
  Binary,
  Database,
  Server,
  Brain,
  ChevronUp,
  Laptop,
  Globe,
  BookOpen,
  Coffee
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setIsSubmitting(true);
      await emailjs.sendForm(
        'gmail', // Replace with your EmailJS service ID
        'template_jxal6oi', // Replace with your EmailJS template ID
        formRef.current,
        'huVfNaOoArNNdGSt_' // Replace with your EmailJS public key
      );
      alert('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const skills = [
    {
      category: "Frontend Development",
      icon: <Laptop className="w-12 h-12 text-blue-400" />,
      items: ["React.js", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      category: "Backend Development",
      icon: <Server className="w-12 h-12 text-purple-400" />,
      items: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"]
    },
    {
      category: "Computer Science",
      icon: <Binary className="w-12 h-12 text-green-400" />,
      items: ["Data Structures", "Algorithms", "System Design", "Problem Solving"]
    },
    {
      category: "Tools & Technologies",
      icon: <Globe className="w-12 h-12 text-pink-400" />,
      items: ["Git", "Docker", "AWS", "Firebase"]
    }
  ];

  const projects = [
    {
      title: 'React API Project',
      description: 'A Pixele website clone using React and Bootstrap',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60',
      link: 'https://github.com/TusharNaugain/React-API-Project'
    },
    {
      title: 'Carzuu Website',
      description: 'Car featuring website built with React and Material UI',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&auto=format&fit=crop&q=60',
      link: 'https://github.com/TusharNaugain/Carzuu-Webite'
    },
    {
      title: 'Code-Editor',
      description: 'Code Editor Platform built with react and monaco framework',
      image: 'photo.png',
      link: 'https://github.com/TusharNaugain/Corousel-Code-Editor.git'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Progress bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-md z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.a 
              href="#home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            >
              Tushar Kumar
            </motion.a>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1 }}
                  className={`hover:text-blue-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : ''
                  }`}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Hello, I'm Tushar Kumar
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Full Stack Developer & Computer Science Student
            </p>
            <div className="flex justify-center space-x-6 mb-12">
              <motion.a
                href="https://github.com/TusharNaugain"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="text-gray-400 hover:text-white"
              >
                <Github className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/tushar-naugain-aa3152292/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="text-gray-400 hover:text-white"
              >
                <Linkedin className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="https://twitter.com/NaugainTushar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="text-gray-400 hover:text-white"
              >
                <Twitter className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/__skipper_04/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="text-gray-400 hover:text-white"
              >
                <Instagram className="w-8 h-8" />
              </motion.a>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-black/30">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <BookOpen className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <p className="text-gray-300">
                Currently pursuing B.Tech in Computer Science at Polaris School of Technology, 
                where I'm developing a strong foundation in computer science principles and 
                modern software development practices.
              </p>
              
              <div className="flex items-center space-x-4 pt-6">
                <Coffee className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-semibold">Passion</h3>
              </div>
              <p className="text-gray-300">
                I'm passionate about creating innovative solutions that make a difference. 
                My journey in tech is driven by curiosity and a desire to build applications 
                that solve real-world problems.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">What I Do</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Code2 className="w-5 h-5 text-blue-400" />
                    <span>Full Stack Development</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Binary className="w-5 h-5 text-purple-400" />
                    <span>Algorithm Design & Problem Solving</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-green-400" />
                    <span>Web Application Development</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Database className="w-5 h-5 text-pink-400" />
                    <span>Database Design & Management</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Current Focus</h3>
                <p className="text-gray-300">
                  Actively working on expanding my expertise in modern web technologies 
                  while contributing to open-source projects and building my portfolio 
                  of full-stack applications.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            Skills & Technologies
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skills.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 hover:from-gray-800/60 hover:to-gray-900/60 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: (index * 0.1) + (itemIndex * 0.1) }}
                      className="bg-gray-800/30 rounded-lg p-4 hover:bg-gray-700/30 transition-colors"
                    >
                      <span className="text-gray-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-black/30">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            Latest Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end transform transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-blue-500 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            Get in Touch
          </motion.h2>
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full px-4 py-3 bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={6}
              className="w-full px-4 py-3 bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black/50">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Tushar Kumar. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollProgress > 20 ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>
    </div>
  );
}

export default App;