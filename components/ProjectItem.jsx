import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaChevronRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const basePath="/@/public/assets"

const ProjectItem = ({project}) => {
    // const image=require(project.image)
  return (
    <div key={project.id} className="border border-gray-300 rounded-md shadow-lg group">
        <div className='relative'>
            <img className=' rounded-md w-full h-auto aspect-[3/2] object-fill' src={project.image} alt={project.title}/>
            <div className='hidden group-hover:block ease-in-out cursor-pointer'>
                <div className='absolute left-0 top-0 rounded-md bg-black opacity-50 h-full w-full' />
                <div className='absolute left-5 bottom-5 text-white'>
                    <p className='text-l font-semibold tracking-wider'>{project.title}</p>
                    <p className='text-sm mt-2 max-h-[60%] overflow-hidden'>{project.tag}</p>
                </div>
                <div className="absolute top-[2%] right-0 flex items-center justify-end p-2">
                    <Link target="_blank" rel="noopener noreferrer" className="text-white mx-2 hover:text-black" href={project.github}>
                        <FaGithub size={20} />
                    </Link>
                    <Link target="_blank" rel="noopener noreferrer" className="text-white mx-2 hover:text-black" href={project.live}>
                        <FaExternalLinkAlt size={20} />
                    </Link>
                    {/* <Link className="text-white mx-2 hover:text-black" href={project.detail}>
                        <FaChevronRight size={20} />
                    </Link> */}
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default ProjectItem