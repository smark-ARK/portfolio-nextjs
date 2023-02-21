import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaChevronRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const basePath="/@/public/assets"

const ProjectItem = ({project}) => {
    // const image=require(project.image)
  return (
    <div key={project.id} className="border border-gray-300 rounded-md shadow-lg flex flex-col">
        <img className='rounded-md w-full h-auto' src={project.image} alt={project.title}/>
        <div className='p-4'>
            <p className='text-l font-semibold tracking-wider'>{project.title}</p>
            <p className='text-sm mt-2 max-h-20 overflow-hidden'>{project.description}</p>
        </div>
        <div className="flex items-center justify-evenly m-4">
            <Link target="_blank" rel="noopener noreferrer" className="text-gray-500 mx-2 hover:text-black" href={project.github}>
                <FaGithub size={20} />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" className="text-gray-500 mx-2 hover:text-black" href={project.live}>
                <FaExternalLinkAlt size={20} />
            </Link>
            <Link className="text-gray-500 mx-2 hover:text-black" href={project.detail}>
                <FaChevronRight size={20} />
            </Link>
        </div>

    </div>
  )
}

export default ProjectItem