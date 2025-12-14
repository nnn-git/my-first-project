import React from 'react';

/**
 * 
 * @param {string} userName 
 * @param {string} userId 
 * @param {boolean} isTeacher 
 */
const UserProfileCard = ({ userName, userId, isTeacher = false }) => {
  
  
  const roleBadge = isTeacher ? 'Багш (Teacher)' : 'Оюутан (Student)';
  const roleColor = isTeacher ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800';

  return (
    <div className="bg-white shadow-xl rounded-xl p-8 max-w-sm w-full mx-auto transition-all duration-300 transform hover:scale-[1.02] border-t-8 border-blue-500">
      <div className="text-center">
        
        
        <div className="mx-auto h-20 w-20 rounded-full bg-blue-500 flex items-center justify-center text-3xl font-bold text-white shadow-md mb-4">
          {userName ? userName[0].toUpperCase() : 'U'}
        </div>
        
        <h2 className="text-3xl font-extrabold text-gray-800 mt-2">{userName || "Нэр тодорхойгүй"}</h2>
        
        
        <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold mt-2 ${roleColor}`}>
          {roleBadge}
        </span>
        
        <div className="mt-6 pt-4 border-t border-gray-200 text-left">
          <p className="text-gray-600 text-base">
            <span className="font-medium text-gray-800 block mb-1">Системийн ID:</span>
            
            <code className="block break-all p-2 bg-gray-100 rounded text-xs text-gray-900 select-all cursor-pointer hover:bg-gray-200">
              {userId || "N/A"}
            </code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;