import React from 'react';
import { 
  GithubIcon, 
  LinkedinIcon, 
  TwitterIcon, 
  InstagramIcon 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <GithubIcon className="w-6 h-6 hover:text-gray-300 transition-colors" />,
      href: 'https://github.com/its-ruchi?tab=repositories',
      label: 'GitHub'
    },
    {
      icon: <LinkedinIcon className="w-6 h-6 hover:text-blue-400 transition-colors" />,
      href: 'https://www.linkedin.com/in/ruchi-bhilare-87738826b/',
      label: 'LinkedIn'
    },
    {
      icon: <TwitterIcon className="w-6 h-6 hover:text-blue-500 transition-colors" />,
      href: '',
      label: 'Twitter'
    },
    {
      icon: <InstagramIcon className="w-6 h-6 hover:text-pink-500 transition-colors" />,
      href: 'https://www.instagram.com/its_ruchi.b/',
      label: 'Instagram'
    }
  ];

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
        {/* Social Links */}
        <div className="flex space-x-6 mb-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Ruchi Bhilare. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Designed and Developed with ❤️ by Ruchi Bhilare
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;