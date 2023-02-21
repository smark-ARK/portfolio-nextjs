import React from 'react'

const SkillCategory = ({skills,category}) => {
  return (
    <div className="p-4 border border-gray-300 rounded-md mb-4 shadow-lg">
        <p className="text-md uppercase font-semibold tracking-wider mb-5">{category}</p>
        {skills.map(skill => {
          const Icon = skill.icon // Dynamically render the icon component
          // console.log(Icon)
          return (
            <div key={skill.name} className="flex gap-1 align-middle items-center mb-2">
              <div className="w-6 h-6 mr-2"><Icon/></div>
              <div className="flex-1 mr-4">{skill.name}</div>
              <div className="w-[50%] bg-gray-200 rounded-full">
              <div className={`h-2 rounded-full ${
                skill.level >= 80 ? "bg-gray-900" :
                skill.level >= 60 ? "bg-gray-700" :
                skill.level >= 40 ? "bg-gray-500" :
                skill.level >= 20 ? "bg-gray-300" :
                "bg-gray-400"
              }`} style={{ width: `${skill.level}%` }}></div>
              </div>
              <div className="ml-4">{skill.level}%</div>
            </div>
          )
        })}
      </div>
  )
}

export default SkillCategory;