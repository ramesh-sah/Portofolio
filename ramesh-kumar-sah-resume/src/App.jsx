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
    hidden: { opacity: 0, y: 80, rotateX: -15, rotateZ: -2 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      rotateZ: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, rotateZ: 5, rotateX: 10 },
    visible: {
      y: 0,
      opacity: 1,
      rotateZ: 0,
      rotateX: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 font-sans overflow-x-hidden perspective-1200">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gray-700 opacity-10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-gray-600 opacity-5 blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-gray-800 opacity-20 blur-2xl animate-pulse-medium"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
          <div className="absolute inset-0 bg-[url('/svg/grid.svg')] [background-size:20px_20px]" />
        </div>
      </div>

      <div className="max-w-[95vw] md:max-w-7xl mx-auto px-4 py-12 relative z-10">
        <motion.div
          className="w-full p-10 md:p-16 rounded-3xl shadow-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-2xl transform transition-all duration-1000 hover:scale-[1.01] border border-gray-700/50"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ 
            transformStyle: 'preserve-3d',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)'
          }}
          whileHover={{ 
            rotateY: 3, 
            rotateX: -2,
            boxShadow: '0 35px 60px -15px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08)'
          }}
        >
          {/* Profile Section with Enhanced 3D Effect */}
          <motion.div variants={itemVariants} className="flex flex-col items-center mb-12">
            <motion.div
              whileHover={{ 
                scale: 1.1, 
                rotateY: 20, 
                rotateX: 15,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
              }}
              className="relative w-56 h-56 mb-8 group shadow-2xl shadow-gray-900/50 rounded-full overflow-hidden border-4 border-gray-700/50 transform-gpu transition-all duration-700"
              style={{ 
                transformStyle: 'preserve-3d',
                background: 'linear-gradient(145deg, rgba(30,30,30,0.8), rgba(50,50,50,0.4))'
              }}
            >
              <motion.img
                src={Profile}
                alt="Profile"
                className="w-full h-full object-cover rounded-full transition-transform duration-700"
                whileHover={{ scale: 1.05 }}
              />
              <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-gray-400 to-gray-600 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* 3D Ring Effect */}
              <div className="absolute inset-0 rounded-full border-2 border-gray-600/30 shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]"></div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-center tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300"
              style={{ textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}
            >
              Ramesh Kumar Sah
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-2xl font-medium mb-8 bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}
            >
              Full Stack Developer
            </motion.h2>

            {/* Enhanced Summary Section with More Width and 3D Effect */}
            <motion.div
              variants={itemVariants}
              className="w-full max-w-4xl bg-gradient-to-br from-gray-700/30 to-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-xl"
              style={{
                boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.3), 0 10px 25px -5px rgba(0, 0, 0, 0.4)',
                transform: 'translateZ(20px)'
              }}
            >
              <p className="text-center text-gray-200 leading-relaxed tracking-wide text-lg">
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

          {/* Social Links with Enhanced 3D Hover Effects */}
          <motion.div variants={itemVariants} className="flex justify-center gap-8 mb-12 flex-wrap">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                whileHover={{ 
                  scale: 1.15, 
                  rotateZ: 15,
                  y: -8,
                  boxShadow: '0 15px 30px -8px rgba(0, 0, 0, 0.6)',
                  background: 'linear-gradient(145deg, rgba(60,60,60,0.9), rgba(40,40,40,0.7))'
                }}
                whileTap={{ scale: 0.9 }}
                className={`relative p-5 rounded-full bg-gray-800/70 shadow-lg border border-gray-700/50 transition-all duration-300 group ${social.mobileHidden ? 'hidden sm:inline-flex' : ''}`}
                aria-label={`Visit ${social.name} profile`}
                style={{ 
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.5)'
                }}
              >
                <social.icon className="w-10 h-10 text-gray-300 group-hover:text-white transition-colors" />
                <span className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  {social.name}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-800 rotate-45"></div>
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Action Buttons with Enhanced 3D Effects */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-8 items-center">
            <motion.button
              whileHover={{ 
                scale: 1.08, 
                y: -8,
                boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
                background: 'linear-gradient(145deg, #333, #111)'
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full shadow-xl transition-all duration-500 group relative overflow-hidden"
              onClick={() => window.open("https://drive.google.com/file/d/1hc9Y0C4BXX_8bM-njfZmUr-8DwKkJLcD/view?usp=sharing")}
              style={{
                boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700/20 to-gray-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <FaDownload className="w-6 h-6 group-hover:animate-bounce z-10" />
              <span className="font-medium text-lg z-10">Download Resume</span>
            </motion.button>

            <motion.a
              whileHover={{ 
                scale: 1.08, 
                y: -8,
                boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.6)',
                background: 'linear-gradient(145deg, rgba(60,60,60,0.8), rgba(40,40,40,0.6))'
              }}
              whileTap={{ scale: 0.95 }}
              href="mailto:rsah3798@gmail.com"
              className="flex items-center justify-center px-10 py-5 border-2 border-gray-700 rounded-full bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-500 group relative overflow-hidden"
              style={{
                boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.4)'
              }}
            >
              <span className="font-medium text-lg text-gray-200 group-hover:text-white z-10">Contact Me</span>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-gray-400 to-gray-600 group-hover:w-full transition-all duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-0 bg-gradient-to-r from-gray-400/10 to-gray-600/10 group-hover:h-full transition-all duration-500"></div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      <Analytics />
      <SpeedInsights/>
      
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.1; }
          50% { transform: scale(1.15) rotate(8deg); opacity: 0.2; }
        }
        @keyframes pulse-medium {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.2; }
          50% { transform: scale(1.08) rotate(-5deg); opacity: 0.3; }
        }
        @keyframes pulse-slower {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.05; }
          50% { transform: scale(1.2) rotate(-10deg); opacity: 0.1; }
        }
        .animate-pulse-slow { animation: pulse-slow 10s ease-in-out infinite; }
        .animate-pulse-medium { animation: pulse-medium 14s ease-in-out infinite; }
        .animate-pulse-slower { animation: pulse-slower 18s ease-in-out infinite; }
        .perspective-1200 { perspective: 1200px; }
        .transform-gpu { transform-style: preserve-3d; }
      `}</style>
    </div>
  );
};

export default App;
