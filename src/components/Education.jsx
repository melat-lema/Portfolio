import React from 'react';
import {
  FaGraduationCap,
  FaBook,
  FaCalendarAlt,
  FaAward,
} from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      id: 1,
      title: "BSc in Electrical and Computer Engineering",
      school: "Hawassa University",
      status: "Graduated",
      description: "Comprehensive computer engineering education with focus on software development, algorithms, embedded system, circuit design and system design. Participated in various projects and internships to gain practical experience.",
      achievements: [
        { icon: <FaAward className="text-cyan-400 text-xs" />, label: "CGPA: 3.79/4.0" },
        { icon: <FaAward className="text-cyan-400 text-xs" />, label: "Dean's List: 8 semesters" },
      ],
      subjects: ['Electrical Enginerring', "Software Engineering", "Data Structures", "Algorithms", "Database Systems", "Web Development", 'Embedded Systems', 'Digital Logic Design', 'Computer Architecture', 'Operating Systems', 'Networks', 'Signal Processing'],
    },
    {
      id: 2,
      title: "Ethiopian Higher Education Entrance Certificate Examination (EHEECE)",
      school: "Super Holy Savior School",
      status: "Completed",
      description: "Completed preparatory education with excellent scores in the national examination, qualifying for admission to top universities in Ethiopia.",
      achievements: [
        { icon: <FaAward className="text-cyan-400 text-xs" />, label: "Score: 548/700" },
        { icon: <FaAward className="text-cyan-400 text-xs" />, label: "Natural Science Stream" },
      ],
      subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English", 'IT'],
    },
    {
      id: 3,
      title: "Full Stack Web Development Course",
      school: "Evangadi",
      status: "Completed",
      description: "Completed Full-stack development with full commitment",
      achievements: [
        { icon: <FaAward className="text-cyan-400 text-xs" />, label: "Score: 100%" },
        { icon: <FaAward className="text-cyan-400 text-xs" />, label: "Commited 6 month" },
      ],
      subjects: ["HTML", "CSS", "JavaScript", "React", "Node", "MySQL","API", "Express"],
    },
     {
      id: 3,
      title: "HCIA-DATACOM-Cisco",
      school: "Huawei",
      status: "Completed",
      description: "Completed a full Cisco course",
      achievements: [
        { icon: <FaAward className="text-cyan-400 text-xs" />, label: "Score: 100%" },
        { icon: <FaAward className="text-cyan-400 text-xs" />, label: " Certified Network Engineer" },
      ],
      subjects: ["Cisco", "Server", "Network", "IP", "Vlan", "Router","Switch", "Datacom"],
    },
  ];

  return (
    <div className="relative bg-[#0A0A12] flex flex-col items-center justify-center min-h-screen mt-32" >
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Educational Journey
        </h1>
        <p className="text-gray-400 mt-2">My academic path through the Ethiopian education system, building knowledge and skills in Computer Engineering.</p>
      </div>

      {/* Education Cards */}
      <div className="w-full px-4 max-w-4xl">
        <div className="grid grid-cols-1 gap-6 justify-items-center">
          {education.map((edu) => (
            <div
              key={edu.id}
             className="bg-[#0E1018] p-6 rounded-xl border border-[#2D2D44] shadow-lg
            relative overflow-hidden glow-blue glow-hover"
              style={{ minHeight: '400px' , maxWidth: "1200px", width: "100%"}}
            >
              {/* Corner Decorations */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>

              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine"></div>

              {/* Vertical Line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400"></div>

              {/* Icon + Title */}
              <div className="flex items-center gap-2 mb-2">
                <FaGraduationCap className="text-cyan-400 text-3xl" />
                <h3 className="text-lg font-bold text-cyan-400">{edu.title}</h3>
              </div>

              {/* School + Status */}
              <div className="flex items-center gap-4 mb-2">
                <span className="bg-[#2D2D44] px-2 py-1 rounded-full text-xs text-gray-400 flex items-center gap-1">
                  <FaBook className="text-cyan-400 text-xs" /> {edu.school}
                </span>
                <span className="bg-[#2D2D44] px-2 py-1 rounded-full text-xs text-green-400 flex items-center gap-1">
                  <FaCalendarAlt className="text-cyan-400 text-xs" /> {edu.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-4 text-sm line-clamp-3">{edu.description}</p>

              {/* Key Achievements */}
              <div className="mb-4">
                <h4 className="text-sm font-bold text-yellow-400 mb-2">Key Achievements</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((achievement, i) => (
                    <span
                      key={i}
                      className="bg-[#2D2D44] px-2 py-1 rounded-full text-xs text-cyan-400 flex items-center gap-1"
                    >
                      {achievement.icon} {achievement.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Subjects & Skills */}
              <div>
                <h4 className="text-sm font-bold text-yellow-400 mb-2">Key Subjects & Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.subjects.map((subject, i) => (
                    <span
                      key={i}
                      className="bg-[#2D2D44] px-2 py-1 rounded-full text-xs text-gray-400"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;