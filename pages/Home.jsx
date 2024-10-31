import {useEffect} from 'react';
import FunctionBox from '../components/FunctionBox';
import QAndA from '../components/QAndA';
import data from './data.json';


function Home() {
  const {functions, contact, qa} = data;
  console.log(functions, contact, qa);
  useEffect(() => {
    document.body.style.backgroundImage = "url('/assets/bkg.png')";
    return () => {
      document.body.style.background = "#fff";

    }
  }, [])
  return (
    <div className=" w-full  isolate"
          // Set the background image here

    >
      <div className="flex items-center justify-center gap-20  relative min-h-[91vh]">
      <div className=" max-w-3xl py-32 sm:py-48 lg:py-56 ">
        <div className='w-[500px] flex flex-col gap-3'>
          <div className='text-[44px] font-specific-black'>
            <span className='font-sans font-[700] text-[#00ff7f] drop-shadow-[2px_2px_2px_#00000038]'>NEARSTACK</span>
          </div>
          <p className='font-sans text-[16px] opacity-80 font-[500]'>AI-Enhanced Frontend Development And Blockchain Intergration Platform for Web3</p>
          <button
          
            className='hover:shadow-lg font-sans bg-[#00ff7f] font-[600]  mt-4 text-white py-2 px-3 rounded-md w-fit'
            onClick={() => {
              document.getElementById('#content').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Started
          </button>

          </div>
      </div>


      <div
        style={{ backgroundImage: "url('./assets/banner.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
           }} 
           className='w-[320px] pt-0 h-[320px] hover:scale-110 ease-in duration-500'
      > 
      </ div>
      </div>

      <div id='#content' className="min-h-[100vh] bg-[var(--background)] sticky top-0  flex flex-col items-center pb-10">
           {functions.map((item, index) => <FunctionBox data={item} />)}
           

           <div className="w-full flex flex-col items-center mt-10">
            <span className='text-[48px] block mt-10 text-[var(--primary)] font-[600]'>Frequently Asked Questions</span>
            <div className="w-[80%] min-h-[200px] backdrop-blur-sm bg-[#ffffff38] rounded-[8px] mt-6">

              <div className="px-6 py-4">
                {qa.map((item, index) => 
                  <QAndA data={item} key={index} />
                )}
            </div>
            </div>
           
           </div>


           <span className='text-[48px] block mt-10 text-[var(--primary)] font-[600]'>Contact</span>
        <div className="contact w-full  flex px-[60px] items-center justify-center mt-10">

            {contact.map((item, index) => <div key={index} className='mx-4 px-6 py-4 rounded-md border-collapse border-[var(--primary)] border-[4px] cursor-pointer hover:scale-[1.05] duration-100 ease-in transition-all'>
                <span className="text-[var(--primary)] font-[700]">{item.title}</span>
            </div>)
              }
        </div>
      </div>

        
    </div>

);
}

export default Home;