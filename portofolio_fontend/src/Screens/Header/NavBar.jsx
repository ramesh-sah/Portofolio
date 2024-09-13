// export default NavBar
import { Link } from "react-router-dom";
import { useState } from 'react'
import Logo from './../../assets/logo.png'

export default function NavBar() {

    const [state, setState] = useState(false)

    // Replace javascript:void(0) path with your path

    const navigation = [
        { title: "About", path: "/" },
        { title: "Resume", path: "/resume" },
        { title: "Projects", path: "/projects" },
        { title: "Courses", path: "/courses" },
        { title: "Notes", path: "/notes" },
        { title: "Blog", path: "/blog" },
        { title: "Contact", path: "/Contact" }
    ]

    return (
        <nav className="fixed top-0 w-full z-50 bg-gray-800 shadow-md px-4 py-3">
            <div className="container mx-auto flex items-center justify-between">
                <Link to="/">
                    <div className="flex items-center">
                        <img
                            src={Logo} // Replace with your logo or profile image
                            className="w-15 h-15 rounded-full"
                            alt="Logo"
                        />
                        <span className="ml-2 font-medium text-white text-2xl">Ramesh Kumar Sah</span>
                    </div>
                </Link>
                <button className="text-white outline-none p-2 rounded-md focus:border-gray-400 focus:border md:hidden"
                    onClick={() => setState(!state)}
                >
                    {
                        state ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                            </svg>
                        )
                    }
                </button>
                <div className={`md:flex md:items-center md:justify-center md:space-x-6 ${state ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col md:flex-row md:space-x-6">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-white  hover:text-yellow-500">
                                        <Link to={item.path}>
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>


            </div>
        </nav>
    )
}