import datas from './datas';
import ReturnProject from './ReturnProject';

const Projects = () => {
   console.log(datas);

   return (
      <section className='projects'>
         <h1>Projects I've done</h1>
         <ul>
            {datas.map((project) => {
               const { title, link, description, stack, inProgress } = project;
               return (
                  <ReturnProject
                     key={title}
                     title={title}
                     link={link}
                     description={description}
                     stack={stack}
                     inProgress={inProgress}
                  />
               );
            })}
         </ul>
      </section>
   );
};

export default Projects;
