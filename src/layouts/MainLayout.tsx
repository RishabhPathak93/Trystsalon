import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

interface NavChild {
  name: string;
  path: string;
}

interface NavLink {
  name: string;
  path: string;
  children?: NavChild[];
  badge?: string;
  external?: boolean;
}

const MainLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks: NavLink[] = [
    { name: 'ABOUT', path: '/about', children: [
      { name: 'Tryst', path: '/about' },
      { name: 'Locations', path: '/locations' },
      { name: 'Sustainability', path: '/sustainability' },
      { name: 'We Care', path: '/we-care' },
      { name: 'Blog', path: '/blog'   }
    ]},
    { name: 'SERVICES', path: '/services', children: [
      { name: 'Hair', path: '/services/hair' },
      { name: 'Nail', path: '/services/nail' },
      { name: 'Skin', path: '/services/skin' },
      { name: 'Spa', path: '/services/spa' },
      { name: 'Grooming', path: '/services/grooming' },
      { name: 'SPMU', path: '/services/spmu' }
    ]},
    { name: 'BLOG', path: '/blog' },
    { name: 'BOOK APPOINTMENT', path: 'https://wa.me/1234567890', external: true },
    { name: 'OFFERS', path: '/offers' },
  ];

  const footerServices = [
    { name: 'Hair', path: '/services/hair' },
    { name: 'Nail', path: '/services/nail' },
    { name: 'Skin', path: '/services/skin' },
    { name: 'Spa', path: '/services/spa' },
    { name: 'Grooming', path: '/services/grooming' }
  ];

  const footerAbout = [
    { name: 'Story', path: '/about' },
    { name: 'Salon', path: '/locations' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Blog', path: '/blog' }
  ];

  const footerWork = [
    { name: 'Lookbook', path: '/work' },
    { name: 'Media', path: '/media' }
  ];

  const footerTerms = [
    { name: 'Returns & Refund Policy', path: '/terms#refund' },
    { name: 'Cancellation Policy', path: '/terms#cancellation' },
    { name: 'Payment Modes', path: '/terms#payment' },
    { name: 'Pricing Policy', path: '/terms#pricing' },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden font-montserrat text-brown">
      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-beige/95 shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center shrink-0 group">
            <img
              src="/public/images/trystlogo.jpg"
              alt="Tryst Salon"
              className="object-contain h-10 transition-all duration-300 sm:h-12 md:h-14 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="items-center hidden space-x-6 lg:flex">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.external ? (
                  <a
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative text-xs font-medium tracking-wider uppercase transition text-brown hover:text-dark-green group"
                  >
                    {link.name}
                    {link.badge && (
                      <span className="ml-1 px-1.5 py-0.5 text-[10px] font-bold bg-dark-green text-light-gray rounded">
                        {link.badge}
                      </span>
                    )}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-dark-green transition-all duration-300 group-hover:w-full" />
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    className="relative text-xs font-medium tracking-wider uppercase transition text-brown hover:text-dark-green group"
                  >
                    {link.name}
                    {link.badge && (
                      <span className="ml-1 px-1.5 py-0.5 text-[10px] font-bold bg-dark-green text-light-gray rounded">
                        {link.badge}
                      </span>
                    )}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-dark-green transition-all duration-300 group-hover:w-full" />
                  </Link>
                )}

                {link.children && (
                  <div className="absolute left-0 z-50 invisible w-48 mt-2 transition-all duration-300 rounded-md shadow-lg opacity-0 bg-beige group-hover:opacity-100 group-hover:visible">
                    <div className="py-2 rounded-md ring-1 ring-dark-brown ring-opacity-5">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className="block px-4 py-2 text-xs transition-colors text-brown hover:text-dark-green hover:bg-champagne_pink"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="flex items-center p-2 -mr-2 transition-colors rounded-md lg:hidden hover:bg-secondary-beige"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-brown"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-dark-green/50 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              className="absolute top-0 right-0 w-[300px] h-full overflow-y-auto bg-beige"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <img
                    src="/public/images/trystlogo.jpg"
                    alt="Tryst Salon"
                    className="h-8"
                  />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 transition-colors rounded-full text-brown hover:bg-dark-green hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <nav className="space-y-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="pb-4 border-b border-secondary-beige"
                    >
                      {link.external ? (
                        <a
                          href={link.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg text-brown hover:text-white hover:bg-dark-green"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.name}
                          {link.badge && (
                            <span className="ml-2 px-1.5 py-0.5 text-[10px] font-bold bg-dark-green text-white rounded-full">
                              {link.badge}
                            </span>
                          )}
                        </a>
                      ) : (
                        <>
                          <Link
                            to={link.path}
                            className="block px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg text-brown hover:text-white hover:bg-dark-green"
                            onClick={() => !link.children && setMobileMenuOpen(false)}
                          >
                            <span className="flex items-center justify-between">
                              {link.name}
                              {link.badge && (
                                <span className="ml-2 px-1.5 py-0.5 text-[10px] font-bold bg-dark-green text-white rounded-full">
                                  {link.badge}
                                </span>
                              )}
                              {link.children && (
                                <svg
                                  className="w-4 h-4 ml-2 transition-transform duration-200"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              )}
                            </span>
                          </Link>
                          {link.children && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="mt-2 ml-4 space-y-1"
                            >
                              {link.children.map((child) => (
                                <Link
                                  key={child.name}
                                  to={child.path}
                                  className="block px-4 py-2 text-sm transition-all duration-300 rounded-lg text-light-brown hover:text-white hover:bg-dark-green"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </>
                      )}
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 space-y-4"
                >
                  <div className="text-sm text-brown">Contact us</div>
                  <div className="flex space-x-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 transition-colors rounded-full text-brown hover:text-white hover:bg-dark-green"
                    >
                      <FaFacebookF size={18} />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 transition-colors rounded-full text-brown hover:text-white hover:bg-dark-green"
                    >
                      <FaInstagram size={18} />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="py-10 text-light-gray bg-dark-green">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            <div>
              <h3 className="mb-4 text-lg font-lora">Services</h3>
              <ul className="space-y-2">
                {footerServices.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm hover:underline">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-lora">About us</h3>
              <ul className="space-y-2">
                {footerAbout.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm hover:underline">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-lora">Contact us</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="https://wa.me/1234567890" className="text-sm hover:underline">
                    Book Appointment
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-lora">Work</h3>
              <ul className="space-y-2">
                {footerWork.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm hover:underline">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-lora">Terms</h3>
              <ul className="space-y-2">
                {footerTerms.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm hover:underline">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between pt-8 mt-8 border-t border-light-gray/20 md:flex-row">
            <div className="flex mb-4 space-x-4 md:mb-0">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition text-light-gray hover:text-beige">
                <FaFacebookF size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition text-light-gray hover:text-beige">
                <FaInstagram size={18} />
              </a>
            </div>

            <div className="flex flex-col items-center space-y-2 text-sm md:flex-row md:space-y-0">
              <span className="md:mr-4">Tryst © Copyright {new Date().getFullYear()}</span>
              <span className="text-beige">Designed by Tridenzic</span>
              <Link to="/admin/login" className="ml-4 text-xs text-light-gray/50 hover:text-light-gray">Admin</Link>
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed z-50 flex items-center justify-center w-10 h-10 p-3 transition rounded-full shadow-lg text-light-gray bg-dark-green bottom-4 right-4 sm:bottom-6 sm:right-6 hover:bg-dark-brown sm:w-12 sm:h-12"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={20} className="sm:w-6 sm:h-6" />
        </a>
      </footer>
    </div>
  );
};

export default MainLayout;
