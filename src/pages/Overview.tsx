import CanvasComp from '../threeJsAnmiation/CanvasComp';

const Overview = () => {
   return (
      <>
         <section className='overview'>
            <section className='head'>
               <h2>frontend - React developer</h2>
            </section>
            {/* <iframe src='https://app.vectary.com/p/1Ew95qxtJTKaHnSLlAlv6C' frameBorder='0' width='100%' height='600px'></iframe> */}
            <section className='logo-animation'>
               <CanvasComp />
            </section>
         </section>
      </>
   );
};

export default Overview;
