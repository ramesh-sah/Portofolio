import React from 'react'
import Logo from '../assets/logo.png'

function AboutCart() {
    return (
        <article className="rounded-xl border border-gray-700  p-24 mt-25">
            <div className="flex items-center gap-4">
                <img
                    alt=""
                    src={Logo}
                    className="size-16 rounded-full object-cover"
                />

                <div>
                    <h3 className="text-lg font-medium text-white">Ramesh Kumar Sah</h3>

                    <div className="flow-root">
                        <ul className="-m-1 flex flex-wrap">
                            <li className="p-1 leading-none">
                                <a href="#" className="text-xs font-medium text-gray-300"> Twitter </a>
                            </li>
                            <li className="p-1 leading-none">
                                <a href="#" className="text-xs font-medium text-gray-300"> Linkedin </a>
                            </li>

                            <li className="p-1 leading-none">
                                <a href="#" className="text-xs font-medium text-gray-300"> GitHub </a>
                            </li>

                            <li className="p-1 leading-none">
                                <a href="#" className="text-xs font-medium text-gray-300">Website</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <ul className="mt-4 space-y-2 ">
                <li>
                    <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                        <strong className="font-medium text-white">Objectives </strong>

                        <p className="mt-1 text-xl  text-gray-300">
                            I’m Ramesh Kumar Sah, and Being a BSc Computer Science and Software Engineering graduate with experience in React.js,
                            Laravel , Django(django-rest-framework), and Python. I am seeking a full-stack developer role and have experience building
                            web applications. I am also interested in AI/ML engineering and have experience with TensorFlow, Keras, Scikit-learn, numpy
                            ,seaborn, vdata-profilling, pandas, metplotlib, OpenCV and BeautifulSoup . Additionally, I have also good knowledge of
                            DevOps engineering and have experience with AWS, Terraform, Ansible, Docker, Kubernetes, Git,GitHub, Cheff, Nignx,
                            Tomcat , Shell Scripting, and Jenkins. I am also skilled in developing mobile applications using Flutter and also pursuing roles
                            as an AWS Cloud Practitioner.

                        </p>
                    </a>
                </li>

            </ul>
        </article>
    )
}

export default AboutCart