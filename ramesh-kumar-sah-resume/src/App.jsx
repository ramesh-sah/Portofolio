import { useEffect } from "react";
import { motion } from "framer-motion";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react";
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
    hidden: { opacity: 0, y: 60, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        type: "spring",
        stiffness: 90,
        damping: 15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, rotateZ: 3 },
    visible: {
      y: 0,
      opacity: 1,
      rotateZ: 0,
      transition: { type: "spring", stiffness: 120, damping: 12 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 font-sans overflow-x-hidden perspective-1000">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gray-200 opacity-15 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-gray-300 opacity-10 blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-gray-100 opacity-25 blur-2xl animate-pulse-medium"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
          <div className="absolute inset-0 bg-[url('/svg/grid.svg')] [background-size:20px_20px]" />
        </div>
      </div>

      <div className="max-w-[95vw] md:max-w-6xl mx-auto px-4 py-8 md:py-16 relative z-10">
        <motion.div
          className="w-full p-6 md:p-10 rounded-3xl shadow-2xl bg-white/90 backdrop-blur-lg transform transition-all duration-700 hover:scale-[1.01] border border-gray-200/50"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ 
            transformStyle: 'preserve-3d',
            boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)'
          }}
          whileHover={{ 
            rotateY: 2, 
            rotateX: -1,
            boxShadow: '0 25px 50px -15px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.08)'
          }}
        >
          {/* Profile Section with 3D Effect */}
          <motion.div variants={itemVariants} className="flex flex-col items-center mb-8 md:mb-12">
            <motion.div
              whileHover={{ 
                scale: 1.08, 
                rotateY: 15, 
                rotateX: 10,
                boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.25)'
              }}
              className="relative w-40 h-40 md:w-52 md:h-52 mb-6 md:mb-8 group shadow-2xl shadow-gray-400/20 rounded-full overflow-hidden border-4 border-gray-200/50 transform-gpu transition-all duration-500"
              style={{ 
                transformStyle: 'preserve-3d',
                background: 'linear-gradient(145deg, rgba(255,255,255,0.8), rgba(240,240,240,0.6))'
              }}
            >
              <motion.img
                src={Profile}
                alt="Profile"
                className="w-full h-full object-cover rounded-full transition-transform duration-700"
                whileHover={{ scale: 1.05 }}
              />
              <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-gray-400 to-gray-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              
              {/* 3D Ring Effect */}
              <div className="absolute inset-0 rounded-full border-2 border-gray-300/30 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]"></div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-5xl font-bold text-center tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
            >
              Ramesh Kumar Sah
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-lg md:text-2xl font-medium mb-6 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent"
            >
              Full Stack Developer
            </motion.h2>

            {/* Enhanced Summary Section */}
            <motion.div
              variants={itemVariants}
              className="w-full max-w-4xl bg-gradient-to-br from-gray-50/70 to-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200/50 shadow-lg"
              style={{
                boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.05), 0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                transform: 'translateZ(15px)'
              }}
            >
              <p className="text-center text-gray-700 leading-relaxed tracking-wide text-base md:text-lg">
                I am Ramesh Kumar Sah, a  BSc graduate in Computer Science and Software Engineering from Patan College for Professional Studies, affiliated with the University of Bedfordshire, UK.
                <br className="hidden md:block" /><br className="hidden md:block" />
                I specialize in full-stack development using React.js, Laravel, and Django, with strong proficiency in my core programming languages: PHP, Python, JavaScript, C#, Java and SQL. I'm also passionate about AI/ML with hands-on experience in TensorFlow, Keras, Scikit-learn, NumPy, Seaborn, Pandas, Matplotlib, OpenCV, Scrapy, and BeautifulSoup.
                <br className="hidden md:block" /><br className="hidden md:block" />
                Additionally, I bring strong DevOps capabilities including AWS, Terraform, Ansible, Docker, Kubernetes, Git, GitHub, GitLab, Chef, Nginx, Tomcat, shell scripting, and CI/CD pipelines with Jenkins. I've developed mobile applications using Flutter and hold an AWS Cloud Practitioner certification.
                <br className="hidden md:block" /><br className="hidden md:block" />
                I'm eager to apply my technical and cloud skills in a dynamic full-stack development role. Thank you.
              </p>
            </motion.div>
          </motion.div>

          {/* Social Links with 3D Hover Effects */}
          <motion.div variants={itemVariants} className="flex justify-center gap-4 md:gap-6 mb-8 md:mb-12 flex-wrap">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                whileHover={{ 
                  scale: 1.15, 
                  rotateZ: 10,
                  y: -5,
                  boxShadow: '0 15px 30px -8px rgba(0, 0, 0, 0.15)',
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,240,240,0.8))'
                }}
                whileTap={{ scale: 0.9 }}
                className={`relative p-3 md:p-4 rounded-full bg-white shadow-lg border border-gray-200/50 transition-all duration-300 group ${social.mobileHidden ? 'hidden sm:inline-flex' : ''}`}
                aria-label={`Visit ${social.name} profile`}
                style={{ 
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.1)'
                }}
              >
                <social.icon className="w-6 h-6 md:w-8 md:h-8 text-gray-700 group-hover:text-gray-900 transition-colors" />
                <span className="absolute -bottom-8 md:-bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {social.name}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-gray-800 rotate-45"></div>
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Action Buttons with 3D Effects */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 items-center">
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.2)',
                background: 'linear-gradient(145deg, #333, #111)'
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full shadow-xl transition-all duration-500 group relative overflow-hidden"
              onClick={() => window.open("https://drive.google.com/file/d/1hc9Y0C4BXX_8bM-njfZmUr-8DwKkJLcD/view?usp=sharing")}
              style={{
                boxShadow: '0 10px 25px -8px rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700/20 to-gray-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <FaDownload className="w-5 h-5 md:w-6 md:h-6 group-hover:animate-bounce z-10" />
              <span className="font-medium text-sm md:text-base z-10">Download Resume</span>
            </motion.button>

            <motion.a
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.15)',
                background: 'linear-gradient(145deg, rgba(245,245,245,0.9), rgba(230,230,230,0.8))'
              }}
              whileTap={{ scale: 0.95 }}
              href="mailto:rsah3798@gmail.com"
              className="flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-gray-800 rounded-full bg-white hover:bg-gray-50 transition-all duration-500 group relative overflow-hidden"
              style={{
                boxShadow: '0 10px 25px -8px rgba(0, 0, 0, 0.1)'
              }}
            >
              <span className="font-medium text-sm md:text-base text-gray-800 group-hover:text-gray-900 z-10">Contact Me</span>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-gray-700 to-gray-900 group-hover:w-full transition-all duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-0 bg-gradient-to-r from-gray-100 to-gray-200 group-hover:h-full transition-all duration-500"></div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      <Analytics />
      <SpeedInsights/>
      
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.15; }
          50% { transform: scale(1.15) rotate(8deg); opacity: 0.25; }
        }
        @keyframes pulse-medium {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.25; }
          50% { transform: scale(1.08) rotate(-5deg); opacity: 0.35; }
        }
        @keyframes pulse-slower {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.1; }
          50% { transform: scale(1.2) rotate(-10deg); opacity: 0.2; }
        }
        .animate-pulse-slow { animation: pulse-slow 10s ease-in-out infinite; }
        .animate-pulse-medium { animation: pulse-medium 14s ease-in-out infinite; }
        .animate-pulse-slower { animation: pulse-slower 18s ease-in-out infinite; }
        .perspective-1000 { perspective: 1000px; }
        .transform-gpu { transform-style: preserve-3d; }
        
        @media (max-width: 768px) {
          .perspective-1000 { perspective: 800px; }
        }
      `}</style>
    </div>
  );
};

export default App;
