import React from 'react';

interface SkillProps {
  name: string;
  level: number;
  color: string;
}

const SkillBar: React.FC<SkillProps> = ({ name, level, color }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-800 dark:text-gray-200 font-medium">{name}</span>
        <span className="text-gray-600 dark:text-gray-400 text-sm">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full ${color}`} 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const frontendSkills: SkillProps[] = [
    { name: 'HTML/CSS', level: 95, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 50, color: 'bg-yellow-500' },
  ];

  const backendSkills: SkillProps[] = [
    { name: 'PHP', level: 60, color: 'bg-purple-500' },
    { name: 'Node.js', level: 70, color: 'bg-green-500' },
    { name: 'SQL', level: 40, color: 'bg-red-500' },
  ];

  const otherSkills: SkillProps[] = [
    { name: 'Discord.js', level: 100, color: 'bg-indigo-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 rounded-full text-sm font-medium mb-4">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Technical Skills
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            A showcase of my programming abilities and technical expertise across various technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3">
                <span className="text-blue-600 dark:text-blue-300 text-lg">F</span>
              </span>
              Frontend Development
            </h3>
            {frontendSkills.map((skill) => (
              <SkillBar 
                key={skill.name} 
                name={skill.name} 
                level={skill.level} 
                color={skill.color} 
              />
            ))}
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-3">
                <span className="text-green-600 dark:text-green-300 text-lg">B</span>
              </span>
              Backend Development
            </h3>
            {backendSkills.map((skill) => (
              <SkillBar 
                key={skill.name} 
                name={skill.name} 
                level={skill.level} 
                color={skill.color} 
              />
            ))}
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-3">
                <span className="text-purple-600 dark:text-purple-300 text-lg">O</span>
              </span>
              Other Skills
            </h3>
            {otherSkills.map((skill) => (
              <SkillBar 
                key={skill.name} 
                name={skill.name} 
                level={skill.level} 
                color={skill.color} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;