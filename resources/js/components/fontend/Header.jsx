import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion, px } from 'framer-motion';
import pdfUrl from '../../../assets/pdf/Cv (3).pdf';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true); 
    const [prevScrollY, setPrevScrollY] = useState(0); 

    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > prevScrollY) {
            
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }
            setPrevScrollY(window.scrollY); 
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); 
        };
    }, [prevScrollY]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Mokaddes_Ali_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const navItems = [
        { link: 'About', path: 'about' },
        { link: 'Services', path: 'services' },
        { link: 'Projects', path: 'portfolio' },
        { link: 'Blog', path: 'Blog' },
        { link: 'Contact', path: 'contact' },
    ];

    return (
        <motion.nav
            className="w-full flex justify-between items-center gap-1 py-4 sticky top-0 z-[999] bg-gray-200 dark:bg-gray-800"
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: showHeader ? 1 : 0, y: showHeader ? 0 : -50 }} 
            transition={{ duration: 0.3 }}
        >
            <h1 className="text-black dark:text-white text-3xl md:text-4xl font-bold font-rubik z-[999]">
                Mokaddes
                <strong className="text-yellow-500 italic pl-1">Ali</strong>
            </h1>

            {/* Desktop Menu */}
            <ul className="lg:flex justify-center gap-4 hidden z-[999]">
                {navItems.map(({ link, path }) => (
                    <Link
                        key={path}
                        className="text-black dark:text-white font-bold uppercase cursor-pointer p-3 rounded-full hover:bg-yellow-500 hover:text-black dark:hover:text-black dark:hover:bg-yellow-500 text-[15px]"
                        to={path}
                        spy={true}
                        offset={-100}
                        smooth={true}
                    >
                        {link}
                    </Link>
                ))}
            </ul>

            {/* Download CV Button */}
            <button
                className="bg-yellow-500 hover:bg-black hover:text-white text-black px-10 py-3 rounded-full font-semibold transform hover:scale-105 transition duration-300 cursor-pointer lg:flex hidden uppercase z-[999] dark:text-black dark:bg-yellow-500 dark:hover:bg-black dark:hover:text-white"
                onClick={handleDownload}
            >
                Download CV
            </button>

            {/* Mobile Menu */}
            <div className="lg:hidden flex justify-between items-center mt-3 z-[999]" onClick={toggleMenu}>
                <div>
                    {isMenuOpen ? (
                        <FaTimes className="text-yellow-500 text-3xl cursor-pointer dark:text-yellow-500" />
                    ) : (
                        <FaBars className="text-yellow-500 text-3xl cursor-pointer dark:text-yellow-500" />
                    )}
                </div>
            </div>

            <div
                className={`${
                    isMenuOpen ? 'flex' : 'hidden'
                } w-full h-fit bg-yellow-500 p-4 absolute top-[70px] left-0 flex-col justify-center items-center z-[999] dark:bg-gray-800`}
            >
                <ul className="flex flex-col justify-center items-center z-[999]">
                    {navItems.map(({ link, path }) => (
                        <Link
                            key={path}
                            className="text-black dark:text-white font-bold uppercase cursor-pointer px-20 py-2 rounded-full hover:bg-black hover:text-white dark:hover:bg-yellow-500 dark:hover:text-black text-[15px]"
                            to={path}
                            spy={true}
                            offset={-100}
                            smooth={true}
                            onClick={closeMenu} 
                        >
                            {link}
                        </Link>
                    ))}
                </ul>

                {/* Mobile Download CV Button */}
                <button
                    className="bg-blue-600 hover:bg-black hover:text-white text-black px-10 py-3 rounded-full font-semibold transform hover:scale-105 transition duration-300 cursor-pointer uppercase mt-4 z-[999] dark:text-black dark:bg-yellow-500 dark:hover:bg-black dark:hover:text-white"
                    onClick={handleDownload}
                >
                    Download CV
                </button>
            </div>
        </motion.nav>
    );
};

export default Header;
