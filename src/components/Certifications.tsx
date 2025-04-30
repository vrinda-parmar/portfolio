import React, { useEffect, useRef } from 'react';
import { Calendar, ExternalLink } from 'lucide-react';


interface CertificationsProps {
  darkMode: boolean;
}

interface Certification {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  logo: string;
  verificationUrl?: string;
}

const certificationsData: Certification[] = [
  {
    id: 1,
    title: 'Generative AI on LinkdeIn Learning',
    organization: 'LinkedIn Learning',
    date: 'Jan 2025',
    description: 'Completed a comprehensive course on Generative AI, gaining hands-on experience with advanced models for text, image, and code generation.',
    logo: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    
  },
  {
    id: 2,
    title: 'Master Course in Full Stack Development',
    organization: 'Great Learning ',
    date: 'June 2024',
    description: 'Completed a Master Course in Full Stack Web Development using the MERN stack (MongoDB, Express.js, React, Node.js) with practical project implementation.',
    logo: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
  },
  {
    id: 3,
    title: 'Web Designing',
    organization: 'Logicpro Infosystems',
    date: 'March 2024',
    description: 'Completed a Web Designing Frontend Course focused on HTML, CSS, JavaScript, and responsive UI development for modern web applications.',
    logo: 'https://images.pexels.com/photos/1181279/pexels-photo-1181279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
  },
  {
    id: 4,
    title: 'C language Certification Course',
    organization: 'The Technological Institute of textile & Sciences, Bhiwani',
    date: 'August 2022',
    description: 'Completed a C Programming course covering fundamentals, data structures, and problem-solving through hands-on coding practice.',
    logo: 'https://images.pexels.com/photos/1181307/pexels-photo-1181307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
  },
  {
    id: 5,
    title: 'Codewar Participation Certificate',
    organization: 'The Technological Institute of textile & Sciences, Bhiwani',
    date: 'April 2025',
    description: 'Participated in CodeWar, a college-level coding competition, demonstrating problem-solving skills and competitive programming proficiency.',
    logo: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
   
  },

];

const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  const certificationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (certificationsRef.current) {
      observer.observe(certificationsRef.current);
    }

    return () => {
      if (certificationsRef.current) {
        observer.unobserve(certificationsRef.current);
      }
    };
  }, []);

  return (
    <section
      id="certifications"
      ref={certificationsRef}
      className={`py-16 md:py-24 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      } opacity-0 transition-opacity duration-1000`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificationsData.map((certification) => (
            <div
              key={certification.id}
              className={`rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
              }`}
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={certification.logo}
                  alt={`${certification.organization} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold mb-1">{certification.title}</h3>
                <div className={`text-sm mb-2 ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {certification.organization}
                </div>
                
                <div className={`flex items-center text-sm mb-3 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <Calendar size={14} className="mr-1" />
                  <span>{certification.date}</span>
                </div>
                
                <p className={`text-sm mb-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {certification.description}
                </p>
                
                {certification.verificationUrl && (
                  <a
                    href={certification.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center text-sm font-medium ${
                      darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                    }`}
                  >
                    Verify Certification
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;