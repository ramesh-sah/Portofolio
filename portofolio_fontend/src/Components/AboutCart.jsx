import React from 'react';
import Logo from '../assets/logo.png';

function AboutCart() {
    return (
        <article className="rounded-xl border border-gray-700 p-6 md:p-12 lg:p-24 mt-6 md:mt-12 lg:mt-25">
            <div className="flex flex-col md:flex-row items-center gap-4">
                <img
                    alt="Logo"
                    src={Logo}
                    className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover"
                />

                <div>
                    <h3 className="text-lg md:text-xl font-medium text-white">Ramesh Kumar Sah</h3>

                    <div className="flow-root mt-2">
                        <ul className="-m-1 flex flex-wrap">
                            <li className="p-1 leading-none">
                                <a href="#" className="text-xs md:text-sm font-medium text-gray-300">Twitter</a>
                            </li>
                            <li className="p-1 leading-none">
                                <a href="#" className="text-xs md:text-sm font-medium text-gray-300">LinkedIn</a>
                            </li>
                            <li className="p-1 leading-none">
                                <a href="#" className="text-xs md:text-sm font-medium text-gray-300">GitHub</a>
                            </li>
                            <li className="p-1 leading-none">
                                <a href="#" className="text-xs md:text-sm font-medium text-gray-300">Website</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <ul className="mt-4 space-y-2">
                <li>
                    <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                        <strong className="font-medium text-white">Objectives</strong>
                        <p className="mt-1 text-sm md:text-base lg:text-xl text-gray-300">
                            I’m Ramesh Kumar Sah, and being a BSc Computer Science and Software Engineering graduate with experience in React.js,
                            Laravel, Django (django-rest-framework), and Python. I am seeking a full-stack developer role and have experience building
                            web applications. I am also interested in AI/ML engineering and have experience with TensorFlow, Keras, Scikit-learn, NumPy,
                            Seaborn, Data Profiling, Pandas, Matplotlib, OpenCV, and BeautifulSoup. Additionally, I have good knowledge of
                            DevOps engineering and experience with AWS, Terraform, Ansible, Docker, Kubernetes, Git, GitHub, Chef, Nginx,
                            Tomcat, Shell Scripting, and Jenkins. I am also skilled in developing mobile applications using Flutter and am pursuing roles
                            as an AWS Cloud Practitioner.
                        </p>
                    </a>
                </li>
            </ul>
        </article>
    );
}

export default AboutCart;