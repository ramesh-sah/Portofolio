import { motion } from "framer-motion";
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
  const socialLinks = [
    { icon: FaLinkedin, name: "LinkedIn", url: "https://www.linkedin.com/in/ramesh-kumar-sah-42b09b224/" },
    { icon: FaGithub, name: "GitHub", url: "https://github.com/ramesh-sah" },
    { icon: FaTwitter, name: "Twitter", url: "https://x.com/rsah3798" },
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
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Times New Roman, serif' }}>
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
        <div className="absolute inset-0 bg-[url('/svg/grid.svg')] [background-size:16px_16px]"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Animated Outer Box without border */}
        <motion.div
          className="max-w-4xl mx-auto p-6 rounded-xl shadow-lg bg-white transform transition-all duration-300 hover:scale-105"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Content */}
          <motion.div variants={itemVariants} className="flex flex-col items-center mb-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-40 h-40 mb-4 group"
            >
              <div className="absolute inset-0 rounded-full border border-gray-300 transition-all duration-300 group-hover:scale-105" />
              <img
                src={Profile}
                alt="Profile"
                className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-105"
              />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-1 text-center tracking-tight"
            >
              Ramesh Kumar Sah
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-base md:text-xl font-medium mb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-center text-sm md:text-base text-gray-700 mb-6 max-w-full leading-relaxed tracking-wide"
            >
              I’m Ramesh Kumar Sah, and being a BSc Computer Science and Software Engineering graduate with experience in React.js, Laravel, Django (django-rest-framework), and Python. I am seeking a full-stack developer role and have experience building web applications. I am also interested in AI/ML engineering and have experience with TensorFlow, Keras, Scikit-learn, NumPy, Seaborn, Data Profiling, Pandas, Matplotlib, OpenCV, and BeautifulSoup. Additionally, I have good knowledge of DevOps engineering and experience with AWS, Terraform, Ansible, Docker, Kubernetes, Git, GitHub, Chef, Nginx, Tomcat, Shell Scripting, and Jenkins. I am also skilled in developing mobile applications using Flutter and am pursuing roles as an AWS Cloud Practitioner.
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center gap-4 mb-6 flex-wrap">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="relative p-3 rounded-full hover:bg-gray-100 transition-colors duration-300 group"
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

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              onClick={() => window.open("https://drive.google.com/file/d/1tohB5wjKYOaLTRNSQPS_f1JUIrSzkrtF/view?usp=sharing")}
            >
              <FaDownload className="flex-shrink-0 w-5 h-5" />
              <span className="text-sm">Download Resume</span>
              <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300" />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:rsah3798@gmail.com"
              className="flex items-center justify-center px-6 py-3 border-2 border-gray-800 rounded-lg hover:bg-gray-100 transition-colors duration-300 relative overflow-hidden group"
            >
              <span className="text-sm">Contact Me</span>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gray-800 group-hover:w-full transition-all duration-300" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default App;
