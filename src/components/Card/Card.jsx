import React, { useState } from 'react'
import { Image } from "@nextui-org/react"
import { Github, ExternalLink, Code, MoreHorizontal } from 'lucide-react'

const techStackIcons = {
  Python: '🐍',
  JavaScript: '📜',
  reactJS: '⚛️',
  HTML: '🌐',
  CSS: '🎨',
  NodeJS: '🟢',
  GraphQL: '◼️',
}

export default function Card({ title, description, image, techStack, github, demo }) {
  const [isExpanded, setIsExpanded] = useState(false)
  console.log('Image source:', image);

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden mx-2 my-4">
      <div className="relative h-[250px] w-full">
        <Image
          isBlurred
          alt="NextUI hero Image"
          src={image}
          width={350}
          height={250}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <h1 className='text-2xl font-bold text-center mb-4'>{title}</h1>
        <div className="h-40 overflow-y-auto mb-4 pr-2">
          {description.map((desc, index) => (
            <p key={index} className="text-gray-700 mb-2">
              {desc}
            </p>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div 
            className="relative"
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
          >
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {techStack.slice(0, 3).map((tech, index) => (
                  <div 
                    key={index}
                    className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center shadow-sm" 
                    title={tech}
                  >
                    {techStackIcons[tech] || tech.slice(0, 1)}
                  </div>
                ))}
                {techStack.length > 3 && (
                  <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center shadow-sm">
                    <MoreHorizontal size={16} />
                  </div>
                )}
              </div>
            </div>
            {isExpanded && techStack.length > 3 && (
              <div className="absolute left-0 bottom-full mb-2 bg-white/90 backdrop-blur-sm shadow-lg rounded-lg p-2 z-10">
                <div className="grid grid-cols-4 gap-2">
                  {techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center hover:bg-gray-200 transition-colors"
                      title={tech}
                    >
                      {techStackIcons[tech] || tech.slice(0, 1)}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="flex space-x-4">
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 flex items-center">
              <Github className="mr-1" size={20} />
              <span className="text-sm">GitHub</span>
            </a>
            <a href={demo} className="text-gray-500 hover:text-gray-700 flex items-center">
              <ExternalLink className="mr-1" size={20} />
              <span className="text-sm">Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

