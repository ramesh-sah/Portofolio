import { useEffect } from "react";
import { motion } from "framer-motion";
import { Analytics } from '@vercel/analytics/react';

import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaDownload
} from "react-icons/fa";
import Profile from "./assets/profile.jpg";

const App = () => {
  useEffect(() => {
    document.body.style.zoom = "80%";
    return () => {
      document.body.style.zoom = "100%";
    };
  }, []);

  const socialLinks = [
    { icon: FaLinkedin, name: "LinkedIn", url: "https://www.linkedin.com/in/ramesh-kumar-sah-42b09b224/" },
    { icon: FaGithub, name: "GitHub", url: "https://github.com/ramesh-sah" },
    { icon: FaTwitter, name: "Twitter", url: "https://x.com/rsah3798", mobileHidden: true },
    { icon: FaFacebook, name: "Facebook", url: "https://www.facebook.com/rsah3798/" },
    { icon: FaInstagram, name: "Instagram", url: "https://www.instagram.com/rsah3798/" }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 }
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-serif overflow-x-hidden">
      <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
        <div className="absolute inset-0 bg-[url('/svg/grid.svg')] [background-size:16px_16px]" />
      </div>

      <div className="max-w-[95vw] md:max-w-6xl mx-auto px-4 py-8 relative z-10">
        <motion.div
          className="w-full p-6 rounded-3xl shadow-2xl bg-white transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl backdrop-blur-md"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center mb-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="relative w-40 h-40 mb-4 group shadow-xl shadow-gray-400 rounded-full overflow-hidden border-4 border-gray-200"
            >
              <motion.img
                src={Profile}
                alt="Profile"
                className="w-full h-full object-cover rounded-full transition-transform duration-700 hover:scale-110"
                whileHover={{ rotateY: 10 }}
              />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-center tracking-tight drop-shadow-lg"
            >
              Ramesh Kumar Sah
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-base md:text-xl font-medium mb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent drop-shadow"
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-center text-sm md:text-base text-gray-700 mb-6 px-4 leading-relaxed tracking-wide"
            >
              Hello, I am Ramesh Kumar Sah, a recent 2025 BSc graduate in Computer Science and Software Engineering from Patan College for Professional Studies, affiliated with the University of Bedfordshire, UK.

              I specialize in full-stack development using React.js, Laravel, and Django, with strong proficiency in my core programming languages: PHP, Python, JavaScript, C# , Java and SQL. I’m also passionate about AI/ML and have hands-on experience with tools and libraries such as TensorFlow, Keras, Scikit-learn, NumPy, Seaborn, data profiling, Pandas, Matplotlib, OpenCV, Scrapy, and BeautifulSoup.

              In addition, I bring strong DevOps capabilities — including AWS, Terraform, Ansible, Docker, Kubernetes, Git, GitHub, GitLab, Chef, Nginx, Tomcat, shell scripting, and CI/CD pipelines with Jenkins.I've also developed mobile applications using Flutter and hold an AWS Cloud Practitioner certification.

              I’m eager to apply my technical and cloud skills in a dynamic full-stack development role. 
              <br/>Thank you.
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center gap-4 mb-6 flex-wrap">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className={`relative p-3 rounded-full bg-white hover:bg-gray-100 transition-colors duration-300 group shadow-lg shadow-gray-300 ${social.mobileHidden ? 'hidden sm:inline-flex' : ''}`}
                aria-label={`Visit ${social.name} profile`}
              >
                <social.icon className="w-7 h-7" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {social.name}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45" />
                </span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 items-center text-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              onClick={() => window.open("https://drive.google.com/file/d/1tohB5wjKYOaLTRNSQPS_f1JUIrSzkrtF/view?usp=sharing")}
            >
              <FaDownload className="w-5 h-5" />
              <span className="text-sm">Download Resume</span>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:rsah3798@gmail.com"
              className="flex items-center justify-center px-6 py-3 border-2 border-gray-800 rounded-full hover:bg-gray-100 transition-colors duration-300 relative overflow-hidden group"
            >
              <span className="text-sm">Contact Me</span>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gray-800 group-hover:w-full transition-all duration-300" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
       <Analytics />
    </div>

   
  );
};

export default App;
