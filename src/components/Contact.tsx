import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'hamza@wick-studio.com',
      link: 'mailto:hamza@example.com'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      content: 'Morocco',
      link: '#'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      content: '+2126 79 44 35 83',
      link: 'tel:+212679443583'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 rounded-full text-sm font-medium mb-4">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            Have a project in mind or questions about my services? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mr-4">
                      <div className="text-red-600 dark:text-red-300">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                        {info.title}
                      </h4>
                      <a 
                        href={info.link} 
                        className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                      >
                        {info.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {['GitHub', 'LinkedIn', 'Twitter', 'Discord'].map((platform) => (
                    <a 
                      key={platform}
                      href="#" 
                      className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white dark:hover:bg-red-600 transition-colors text-gray-700 dark:text-gray-300"
                    >
                      {platform.charAt(0)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-colors text-gray-900 dark:text-white resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors flex items-center"
                >
                  Send Message
                  <Send size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;