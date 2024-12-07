import React, { useState } from 'react';
import Button from '../components/Button.jsx';

const Contact = () => {
  const [contactInfo] = useState({
    email: 'ruchibhilare@gmail.com',
    phone: '+91 123 456 7890',
    linkedin: 'https://www.linkedin.com/in/ruchibhilare/',
    github: 'https://github.com/ruchibhilare',
  });

  const handleSendMessage = () => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  return (
    <section 
      className="c-space my-6 md:my-2 flex items-center justify-center bg-gray-900 text-white" 
      id="contact"
    >
      <div className="text-center max-w-3xl px-5">
        <h2 className="hero_tag text-gray_gradient mb-4">Contact Me</h2>
        
        <div className="space-y-4">
          <p className="text-2xl font-semibold">Get in Touch</p>
          
          <p className="text-lg text-gray-300">
            I'm always open to discussing new projects, collaborating, or just having a good conversation.
          </p>
          
          <div className="space-y-3">
            <p className="contact-info">
              <span className="font-medium">Email:</span> {contactInfo.email}
            </p>
            
            <p className="contact-info">
              <span className="font-medium">Phone:</span> {contactInfo.phone}
            </p>
            
            <p className="contact-info">
              <span className="font-medium">LinkedIn:</span>{' '}
              <a 
                href={contactInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Connect with me
              </a>
            </p>
            
            <p className="contact-info">
              <span className="font-medium">GitHub:</span>{' '}
              <a 
                href={contactInfo.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Visit my GitHub
              </a>
            </p>
          </div>
          
          <Button
            name="Send Message"
            isBeam
            containerClass="w-full"
            onClick={handleSendMessage}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;