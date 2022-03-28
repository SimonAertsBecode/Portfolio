import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Overview = () => {
   return (
      <section className='overview'>
         <section className='basic-infos'>
            <h1>Simon Aerts</h1>
            <img src='/selfie.jpeg' alt='Simon Aerts'></img>
            <section className='social-links'>
               <a rel='noreferrer' target='_blank' href='https://github.com/SimonAertsBecode'>
                  <AiFillGithub />
               </a>
               <a rel='noreferrer' target='_blank' href='https://www.linkedin.com/in/simon-aerts-86a204203/'>
                  <AiFillLinkedin />
               </a>
            </section>
         </section>
         <section className='description'></section>
      </section>
   );
};

export default Overview;
