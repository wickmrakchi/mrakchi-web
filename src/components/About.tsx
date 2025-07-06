import React from 'react';
import { Code, Globe, Bot } from 'lucide-react';


const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 rounded-full text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Who is Mrakchi?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden">
                <img 
                  src="https://cdn.discordapp.com/attachments/1363575512542482452/1388600013914902701/BANNERwick.jpg?ex=6861920a&is=6860408a&hm=9a7826cb7d2dd4534c5efe40b7478e8fdc3b10cc3531a43d9b98a42bb3000057&" 
                  alt="Programmer working on code" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-600 rounded-xl flex items-center justify-center">
                <img 
                  src="https://cdn.discordapp.com/attachments/1363575512542482452/1388600674153005186/DISCORD_LOGO.gif?ex=686192a7&is=68604127&hm=0fdf3da990301ad09686ea8083350cc9b7048867f2ef71740afe476a0f3575c7&" 
                  alt="Programmer working on code" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              A Passionate Developer from Morocco
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm Hamza, a web developer and Discord bot programmer based in Morocco. While I'm relatively new to website 
              programming, I bring enthusiasm, creativity, and a strong desire to learn to every project I work on.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              My journey in programming began with Discord bots, which taught me the fundamentals of back-end development.
              I've since expanded my skills to include front-end development, creating responsive and user-friendly interfaces.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-center">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Bot size={24} className="text-red-600 dark:text-red-300" />
                </div>
                <h4 className="font-medium text-gray-900 dark:text-white">Discord Bots</h4>
              </div>
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-center">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Code size={24} className="text-red-600 dark:text-red-300" />
                </div>
                <h4 className="font-medium text-gray-900 dark:text-white">Web Development</h4>
              </div>
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-center">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe size={24} className="text-red-600 dark:text-red-300" />
                </div>
                <h4 className="font-medium text-gray-900 dark:text-white">Hosting</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
