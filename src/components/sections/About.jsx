import React from 'react';
import { User } from 'lucide-react';
import ProfileImage from '../../assets/profile.jpg';

function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <User className="text-purple-400" size={32} />
          <h2 className="text-4xl font-bold">About Me</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-300">
            <p className="text-lg">
              Hi! I'm a software developer with 3+ years of experience building applications. 
              I went to Tennessee Tech University where I earned my degree in Computer Science.
            </p>
            <p className="text-lg">
              My journey in tech started when I built my first computer at 15. 
              Since then, I've worked with different teams to create scalable and efficient programs. I started my work as a solo developer 
              creating an application to automate laser machine orders. After this I went on to work at Aristocrat Gaming, a slot machine company, 
              where I contributed to various projects including an inventory management system that I also solo developed. I worked along side team members
              to create a tool that deployed our servers, and I worked on a large project for creating specialized files for our gaming machines.
            </p>
            <p className="text-lg">
              I'm passionate about learning new technologies and improving my skills. 
              In my free time, I enjoy a wide variety of hobbies including drumming, guitar, hiking, rock climbing, photography, Dungeons and Dragons, weight lifting, and more. 
            </p>
            <div className="flex gap-4">
                <a
                  href={import.meta.env.BASE_URL + 'BryanDavisResume.pdf'}
                  download
                  className="px-6 py-2 border border-purple-500 rounded-full hover:bg-purple-500/20 transition-colors"
                >
                  Download Resume
                </a>
              {/*<button className="px-6 py-2 border border-purple-500 rounded-full hover:bg-purple-500/20 transition-colors">
                View More
              </button>*/}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-44 h-44 md:w-56 md:h-56">
              <div className="rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 absolute inset-0"></div>
              <img
                src={ProfileImage}
                alt="Profile"
                className="relative rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;