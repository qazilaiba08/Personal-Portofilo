 /* eslint-disable react/prop-types*/
// import bannerImg from '../../assets/banner.jpeg'

// const ProjectCards = ({title,main}) => {
//   return (
//     <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl 
//     shadow-slate-900 rounded-2xl">
//         <img src={bannerImg} alt=""
//         className='p-4' />
//         <h3 className='p-4 text-xl md:text-2xl font-bold leading normalk'>
//             {title}</h3>
//             <p className='px-4 text-sm md:text-md leading-tight py-2'>{main}</p>
//             <div className='mt-2 pt-2 md:p-4 flex gap-2 md:gap-4'>
//               <button className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg 
//               md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold
//               rounded-3xl bg-sky-950'>Demo</button>
//                  <button className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg 
//               md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold
//               rounded-3xl bg-sky-950'>Source Code</button>
//             </div>
//     </div>
//   )
// }

// export default ProjectCards 
import bannerImg from '../../assets/banner.jpeg'

const ProjectCards = ({ title, main }) => {
  return (
    <div className="p-4 md:p-6 flex flex-col max-w-sm bg-[#0c0e19] shadow-lg shadow-slate-900 rounded-2xl">
      <img 
        src={bannerImg} 
        alt={title} 
        className="w-full h-40 object-cover rounded-lg"
      />
      <h3 className="p-4 text-xl md:text-2xl font-bold">{title}</h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-4 flex justify-between">
        <button className="text-white py-2 px-3 text-sm md:text-lg bg-sky-950 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl">
          Demo
        </button>
        <button className="text-white py-2 px-3 text-sm md:text-lg bg-sky-950 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl">
          Source Code
        </button>
      </div>
    </div>
  )
}

export default ProjectCards;
