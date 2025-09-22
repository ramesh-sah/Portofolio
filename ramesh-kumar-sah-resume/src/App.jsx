// import { useEffect } from "react";
// import { motion } from "framer-motion";
// import { Analytics } from '@vercel/analytics/react';
// import { SpeedInsights } from "@vercel/speed-insights/react";
// import {
//   FaLinkedin,
//   FaGithub,
//   FaTwitter,
//   FaFacebook,
//   FaInstagram,
//   FaDownload
// } from "react-icons/fa";
// import Profile from "./assets/profile.jpg";

// const App = () => {
//   useEffect(() => {
//     document.body.style.zoom = "80%";
//     return () => {
//       document.body.style.zoom = "100%";
//     };
//   }, []);

//   const socialLinks = [
//     { icon: FaLinkedin, name: "LinkedIn", url: "https://www.linkedin.com/in/ramesh-kumar-sah-42b09b224/" },
//     { icon: FaGithub, name: "GitHub", url: "https://github.com/ramesh-sah" },
//     { icon: FaTwitter, name: "Twitter", url: "https://x.com/rsah3798", mobileHidden: true },
//     { icon: FaFacebook, name: "Facebook", url: "https://www.facebook.com/rsah3798/" },
//     { icon: FaInstagram, name: "Instagram", url: "https://www.instagram.com/rsah3798/" }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//         type: "spring",
//         stiffness: 100
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: "spring", stiffness: 120 }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white text-black font-serif overflow-x-hidden">
//       <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
//         <div className="absolute inset-0 bg-[url('/svg/grid.svg')] [background-size:16px_16px]" />
//       </div>

//       <div className="max-w-[95vw] md:max-w-6xl mx-auto px-4 py-8 relative z-10">
//         <motion.div
//           className="w-full p-6 rounded-3xl shadow-2xl bg-white transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl backdrop-blur-md"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.div variants={itemVariants} className="flex flex-col items-center mb-6">
//             <motion.div
//               whileHover={{ scale: 1.1, rotate: 2 }}
//               className="relative w-40 h-40 mb-4 group shadow-xl shadow-gray-400 rounded-full overflow-hidden border-4 border-gray-200"
//             >
//               <motion.img
//                 src={Profile}
//                 alt="Profile"
//                 className="w-full h-full object-cover rounded-full transition-transform duration-700 hover:scale-110"
//                 whileHover={{ rotateY: 10 }}
//               />
//             </motion.div>

//             <motion.h1
//               variants={itemVariants}
//               className="text-3xl md:text-4xl font-bold text-center tracking-tight drop-shadow-lg"
//             >
//               Ramesh Kumar Sah
//             </motion.h1>

//             <motion.h2
//               variants={itemVariants}
//               className="text-base md:text-xl font-medium mb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent drop-shadow"
//             >
//               Full Stack Developer
//             </motion.h2>

//             <motion.p
//               variants={itemVariants}
//               className="text-center text-sm md:text-base text-gray-700 mb-6 px-4 leading-relaxed tracking-wide"
//             >
//               Hello, I am Ramesh Kumar Sah, a recent 2025 BSc graduate in Computer Science and Software Engineering from Patan College for Professional Studies, affiliated with the University of Bedfordshire, UK.

//               I specialize in full-stack development using React.js, Laravel, and Django, with strong proficiency in my core programming languages: PHP, Python, JavaScript, C# , Java and SQL. I’m also passionate about AI/ML and have hands-on experience with tools and libraries such as TensorFlow, Keras, Scikit-learn, NumPy, Seaborn, data profiling, Pandas, Matplotlib, OpenCV, Scrapy, and BeautifulSoup.

//               In addition, I bring strong DevOps capabilities — including AWS, Terraform, Ansible, Docker, Kubernetes, Git, GitHub, GitLab, Chef, Nginx, Tomcat, shell scripting, and CI/CD pipelines with Jenkins.I've also developed mobile applications using Flutter and hold an AWS Cloud Practitioner certification.

//               I’m eager to apply my technical and cloud skills in a dynamic full-stack development role. 
//               <br/>Thank you.
//             </motion.p>
//           </motion.div>

//           <motion.div variants={itemVariants} className="flex justify-center gap-4 mb-6 flex-wrap">
//             {socialLinks.map((social) => (
//               <motion.a
//                 key={social.name}
//                 href={social.url}
//                 whileHover={{ scale: 1.2, rotate: 10 }}
//                 whileTap={{ scale: 0.9 }}
//                 className={`relative p-3 rounded-full bg-white hover:bg-gray-100 transition-colors duration-300 group shadow-lg shadow-gray-300 ${social.mobileHidden ? 'hidden sm:inline-flex' : ''}`}
//                 aria-label={`Visit ${social.name} profile`}
//               >
//                 <social.icon className="w-7 h-7" />
//                 <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   {social.name}
//                   <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45" />
//                 </span>
//               </motion.a>
//             ))}
//           </motion.div>

//           <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4 items-center text-center">
//             <motion.button
//               whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
//               whileTap={{ scale: 0.95 }}
//               className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
//               onClick={() => window.open("https://drive.google.com/file/d/1hc9Y0C4BXX_8bM-njfZmUr-8DwKkJLcD/view?usp=sharing")}
//             >
//               <FaDownload className="w-5 h-5" />
//               <span className="text-sm">Download Resume</span>
//             </motion.button>

//             <motion.a
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               href="mailto:rsah3798@gmail.com"
//               className="flex items-center justify-center px-6 py-3 border-2 border-gray-800 rounded-full hover:bg-gray-100 transition-colors duration-300 relative overflow-hidden group"
//             >
//               <span className="text-sm">Contact Me</span>
//               <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gray-800 group-hover:w-full transition-all duration-300" />
//             </motion.a>
//           </motion.div>
//         </motion.div>
//       </div>
//        <Analytics />
//        <SpeedInsights/>
//     </div>

   
//   );
// };

// export default App;

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
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, rotateZ: 5 },
    visible: {
      y: 0,
      opacity: 1,
      rotateZ: 0,
      transition: { type: "spring", stiffness: 120, damping: 15 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 font-sans overflow-x-hidden perspective-1000">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gray-200 opacity-20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-gray-300 opacity-10 blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-gray-100 opacity-30 blur-2xl animate-pulse-medium"></div>
      </div>

      <div className="max-w-[95vw] md:max-w-6xl mx-auto px-4 py-8 relative z-10">
        <motion.div
          className="w-full p-8 md:p-12 rounded-3xl shadow-2xl bg-white/80 backdrop-blur-lg transform transition-all duration-700 hover:scale-[1.02] hover:shadow-3xl border border-gray-200/50"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ transformStyle: 'preserve-3d' }}
          whileHover={{ rotateY: 2, rotateX: -1 }}
        >
          {/* Profile Section with 3D Effect */}
          <motion.div variants={itemVariants} className="flex flex-col items-center mb-10">
            <motion.div
              whileHover={{ scale: 1.1, rotateY: 15, rotateX: 10 }}
              className="relative w-48 h-48 mb-6 group shadow-2xl shadow-gray-400/30 rounded-full overflow-hidden border-4 border-gray-200 transform-gpu transition-all duration-500"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.img
                src={Profile}
                alt="Profile"
                className="w-full h-full object-cover rounded-full transition-transform duration-700"
                whileHover={{ scale: 1.05 }}
              />
              <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-gray-400 to-gray-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-center tracking-tight mb-2"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
            >
              Ramesh Kumar Sah
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-lg md:text-xl font-medium mb-6 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent"
            >
              Full Stack Developer
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="w-full max-w-2xl bg-gray-50/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-inner"
            >
              <p className="text-center text-gray-700 leading-relaxed tracking-wide text-base">
                Hello, I am Ramesh Kumar Sah, a recent 2025 BSc graduate in Computer Science and Software Engineering from Patan College for Professional Studies, affiliated with the University of Bedfordshire, UK.
                <br /><br />
                I specialize in full-stack development using React.js, Laravel, and Django, with strong proficiency in my core programming languages: PHP, Python, JavaScript, C#, Java and SQL. I'm also passionate about AI/ML with hands-on experience in TensorFlow, Keras, Scikit-learn, NumPy, Seaborn, Pandas, Matplotlib, OpenCV, Scrapy, and BeautifulSoup.
                <br /><br />
                Additionally, I bring strong DevOps capabilities including AWS, Terraform, Ansible, Docker, Kubernetes, Git, GitHub, GitLab, Chef, Nginx, Tomcat, shell scripting, and CI/CD pipelines with Jenkins. I've developed mobile applications using Flutter and hold an AWS Cloud Practitioner certification.
                <br /><br />
                I'm eager to apply my technical and cloud skills in a dynamic full-stack development role. Thank you.
              </p>
            </motion.div>
          </motion.div>

          {/* Social Links with 3D Hover Effects */}
          <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-10 flex-wrap">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                whileHover={{ 
                  scale: 1.2, 
                  rotateZ: 10,
                  y: -5,
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)'
                }}
                whileTap={{ scale: 0.9 }}
                className={`relative p-4 rounded-full bg-white shadow-lg border border-gray-200 transition-all duration-300 group ${social.mobileHidden ? 'hidden sm:inline-flex' : ''}`}
                aria-label={`Visit ${social.name} profile`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <social.icon className="w-8 h-8 text-gray-700 group-hover:text-gray-900 transition-colors" />
                <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {social.name}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-800 rotate-45"></div>
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Action Buttons with 3D Effects */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full shadow-xl transition-all duration-300 group"
              onClick={() => window.open("https://drive.google.com/file/d/1hc9Y0C4BXX_8bM-njfZmUr-8DwKkJLcD/view?usp=sharing")}
            >
              <FaDownload className="w-5 h-5 group-hover:animate-bounce" />
              <span className="font-medium">Download Resume</span>
            </motion.button>

            <motion.a
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
              href="mailto:rsah3798@gmail.com"
              className="flex items-center justify-center px-8 py-4 border-2 border-gray-800 rounded-full bg-white hover:bg-gray-50 transition-all duration-300 group relative overflow-hidden"
            >
              <span className="font-medium text-gray-800 group-hover:text-gray-900">Contact Me</span>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-gray-700 to-gray-900 group-hover:w-full transition-all duration-500"></div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      <Analytics />
      <SpeedInsights/>
      
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.2; }
          50% { transform: scale(1.1) rotate(5deg); opacity: 0.3; }
        }
        @keyframes pulse-medium {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.3; }
          50% { transform: scale(1.05) rotate(-3deg); opacity: 0.4; }
        }
        @keyframes pulse-slower {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.1; }
          50% { transform: scale(1.15) rotate(-8deg); opacity: 0.2; }
        }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
        .animate-pulse-medium { animation: pulse-medium 12s ease-in-out infinite; }
        .animate-pulse-slower { animation: pulse-slower 15s ease-in-out infinite; }
        .perspective-1000 { perspective: 1000px; }
        .transform-gpu { transform-style: preserve-3d; }
      `}</style>
    </div>
  );
};

export default App;
