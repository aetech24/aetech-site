import React from 'react';

const TeamMember = ({ member, onClose }) => {
    const handleBackdropClick = (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={handleBackdropClick}>
        <div className="bg-white rounded-lg max-w-4xl w-full mx-auto my-8 max-h-[80vh] overflow-hidden flex flex-col">
          {/* Close button at top-right */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
          >
            <i className="fas fa-times"></i>
          </button>

          <div className="overflow-y-auto flex-1 px-8 py-6">
            {/* Header Section with larger image */}
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start border-b pb-8">
              <div className="w-full md:w-1/3">
                <img 
                  src={member?.image} 
                  alt={member?.name} 
                  className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-2/3 flex flex-col gap-4">
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold">{member.name}</h2>
                  <p className="text-purple font-medium text-xl mt-1">{member.role}</p>
                </div>
                <p className="text-gray-600">{member.bio}</p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" 
                     className="text-blue-600 hover:text-blue-800">
                    <i className="fab fa-linkedin text-2xl"></i>
                  </a>
                  <a href={member.social.github} target="_blank" rel="noopener noreferrer"
                     className="text-gray-800 hover:text-gray-600">
                    <i className="fab fa-github text-2xl"></i>
                  </a>
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer"
                     className="text-blue-400 hover:text-blue-600">
                    <i className="fab fa-twitter text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="mt-8 space-y-8">
              {/* Expertise */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {member?.expertise?.map((skill, index) => (
                    <span key={index} className="bg-purple bg-opacity-10 text-purple px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Experience</h3>
                <div className="space-y-4">
                  {member?.experience?.map((exp, index) => (
                    <div key={index} className="border-l-2 border-purple pl-4">
                      <h4 className="font-semibold">{exp.position}</h4>
                      <p className="text-purple">{exp.company}</p>
                      <p className="text-sm text-gray-500">{exp.duration}</p>
                      <p className="text-gray-600 mt-1">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Education</h3>
                <div className="border-l-2 border-purple pl-4">
                  <h4 className="font-semibold">{member.education.degree}</h4>
                  <p className="text-purple">{member.education.institution}</p>
                  <p className="text-sm text-gray-500">{member.education.year}</p>
                </div>
              </div>

              {/* Certifications */}
              <div className="pb-4">
                <h3 className="text-xl font-semibold mb-3">Certifications</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {member?.certifications?.map((cert, index) => (
                    <li key={index}>{cert}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default TeamMember