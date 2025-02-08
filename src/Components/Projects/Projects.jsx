
// import ProjectCards from "./ProjectCards"


// const Projects = () => {
//   return (
//     <div id="Projects" className="p-10 md:p-24 text-white">
//         <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
//         <div className="py-12 px-8 flex flex-wrap gap-5">
//             <ProjectCards title="Weather Forecast App" main="This is Weather app is created with ReactJS and Bootstrap ✨. " />
//  <ProjectCards title="Profile Data App" main="This is Profile Data app is created with ReactJS and Bootstrap ✨." />
//  <ProjectCards title="Todo App" main="This is Todo app is created with ReactJS and Bootstrap ✨ ." />
//         </div>
//     </div>
//   )
// }

// export default Projects  

import ProjectCards from "./ProjectCards"

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold text-center">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap justify-center gap-6">
        <ProjectCards title="Weather Forecast App" main="A weather app built with ReactJS and Bootstrap. 🌦️" />
        <ProjectCards title="Profile Data App" main="An app to manage profile data, created using ReactJS and Bootstrap. 👤" />
        <ProjectCards title="Todo App" main="A simple Todo app made with ReactJS and Bootstrap. ✅" />
      </div>
    </div>
  )
}

export default Projects;
