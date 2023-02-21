import { useRouter } from 'next/router';
import { FaChevronLeft } from 'react-icons/fa';

export default function ProjectDetail({ project }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="max-w-[1240px] h-auto m-auto py-5">
        <div className='flex flex-row justify-start align-middle'>
            <FaChevronLeft className='hover:cursor-pointer mr-2 mt-2' onClick={()=>router.back()} size={25}/>
            <h2 className='tracking-wider font-normal'>Project Details</h2>
        </div>
        <div className='m-10 flex justify-center items-center'>
            <img className='rounded-md w-3/5 h-auto' src={project.image} alt={project.title} />

        </div>

      
    </div>
  );
}
