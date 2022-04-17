import datas from './datas';
import ReturnProject from './ReturnProject';

const Projects = () => {
   return (
      <section className='projects'>
         <h1>Projects I have done</h1>
         <ul>
            {datas.map((project) => {
               const { title, link, sourceCode, description, stack, inProgress } = project;
               return (
                  <ReturnProject
                     key={title}
                     title={title}
                     link={link}
                     description={description}
                     stack={stack}
                     inProgress={inProgress}
                     sourceCode={sourceCode}
                  />
               );
            })}
         </ul>
      </section>
   );
};

export default Projects;
