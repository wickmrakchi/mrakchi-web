import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Services',
      links: [
        { name: 'Discord Bots', href: '#services' },
        { name: 'Web Development', href: '#services' },
        { name: 'Hosting Solutions', href: '#services' },
      ]
    },
    {
      title: 'About',
      links: [
        { name: 'My Skills', href: '#skills' },
        { name: 'Portfolio', href: '#' },
        { name: 'Testimonials', href: '#' },
      ]
    },
    {
      title: 'Contact',
      links: [
        { name: 'Email', href: 'mailto:mrakchi@wick-studio.com' },
        { name: 'Discord', href: '#' },
        { name: 'Social Media', href: '#' },
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <a href="#home" className="text-2xl font-bold text-white mb-4 block">
              Hamza<span className="text-red-600">.</span>dev
            </a>
            <p className="text-gray-400 mb-6">
              Passionate developer from Morocco providing high-quality programming services.
            </p>
            <div className="flex space-x-4">
              {['GitHub', 'LinkedIn', 'Twitter', 'Discord'].map((platform) => (
                <a 
                  key={platform}
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors text-gray-300"
                >
                  {platform.charAt(0)}
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((column, index) => (
            <div key={index} className="md:col-span-1">
              <h4 className="text-lg font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-red-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Hamza.dev. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-red-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-red-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;