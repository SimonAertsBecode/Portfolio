import { AiFillGithub } from 'react-icons/ai';

const Overview = () => {
   return (
      <section className='overview'>
         <section className='basics-info'>
            <h1>Simon Aerts</h1>
            <img src='/selfie.jpeg' alt='Simon Aerts'></img>
            <a rel='noreferrer' target='_blank' href='https://github.com/SimonAertsBecode'>
               <AiFillGithub />
            </a>
         </section>
         <section className='description'></section>
      </section>
   );
};

export default Overview;
