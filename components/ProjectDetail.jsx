import Image from 'next/image';
import { useRouter } from 'next/router';
import { FaChevronLeft } from 'react-icons/fa';

export default function ProjectDetail({ project }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className='w-full'>
      <div className='w-full h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black opacity-80 z-10' />
        <Image className='absolute z-1' src={project.image} alt={project.title} fill object-fit="cover"/>
      <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-20 p-2 text-white'>
        <h2 className='p-2 uppercase tracking-wider font-semibold'>{project.title}</h2>
        <p className='px-2'>{project.tag}</p>
      </div>
      </div>
      <div className='max-w-[1240px] p-2 grid grid-cols-1 md:grid-cols-3 gap-2 m-auto'>
        <div className='grid col-span-2'>
        <h3 className='text-lg font-semibold'>Overview</h3>
        <p>{project.description}</p>
        <div className='flex flex-col justify-evenly'>
          {
            project.subtopics.map((subtopic)=>(
              <div className='my-4' key={subtopic.id}>
                <h3>{subtopic.title}</h3>
                <img src={subtopic.image} alt={subtopic.title} />
                <p>{subtopic.description}</p>
              </div>
            ))
          }
        </div>
        </div>
        <div>
        <h3 className='text-lg font-semibold'>Technologies Used</h3>
        <div className='grid grid-cols-3 p-2 m-auto max-w-[80vw]'>
          {
            project.tech.map((tec)=>(
              <div key={tec} className='bg-black text-white rounded-full text-sm justify-center text-center py-2 m-1 px-4'>
                <p className=''>{tec}</p>
              </div>
            ))
          }
        </div>
        </div>

      </div>

    </div>
  );
}
