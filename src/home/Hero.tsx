import React from 'react'
import hero from "../assets/hero.png"
import splash from "../assets/splash.png"
import Header from './Header';
const Hero = () => {
   
   
        return (
            <div>
                <h2 className='lg:flex lg:justify-end lg:items-end z-50  top-0 text-white font-bold italic text-[30px] mr-[80px] sm:ml-[30px'>Igniting a Revolution in <span>HR Innovation</span></h2>
                <div className="relative flex flex-col justify-between py-16 lg:py-0 lg:flex-col w-[100%] mt-[10px] ">
                
                
            <div className="w-[90%]  max-w-[90%] px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-[90%]-xl">
                
              <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
                <h2 className="mb-5 font-sans text-4xl text-left font-bold tracking-tight text-white sm:text-6xl sm:leading-none md:text-left sm:text-center">
                 getLinked Tech
                  <br className="hidden md:block mt-[5px]" />
                 Hackathon <span className='text-[#D434FE]'>1.0</span>
                </h2>
                <p className="mb-5 text-base text-white md:text-lg md:text-left sm:text-center">
                 Participate in getLinked tech hackathon 2023 stand <br /> a chance to win a Big prize 
                </p>
                <div className="mb-10 mt-[50px] lg:text-left sm:text-center sm:mt-[30px] md:mb-16 lg:mb-20">
                  <button
                 
                    className="inline-flex items-center p-[20px] justify-center w-auto h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 bg-gradient-to-r from-[#D434FE] to-[#903AFF]  hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  >
                    Register
                  </button>
                </div>
                <div className="flex flex-col items-start sm:items-center lg:items-start">
                  {/* <div className="mb-2 text-sm text-gray-600 md:mb-2">Follow us</div> */}
                  <div className="flex items-start space-x-4">
                   
                    <div className="flex items-start sm:text-center">
                      <a
                        href="/"
                        className="text-white text-[50px] transition-colors duration-300 hover:text-deep-purple-accent-400"
                      >
                      00<span className='text-[15px]'>H</span>
                      </a>
                    </div>
                   
                    <div className="flex items-start sm:text-center">
                      <a
                        href="/"
                        className="text-white text-[50px] transition-colors duration-300 hover:text-deep-purple-accent-400"
                      >
                      00<span className='text-[15px]'>M</span>
                      </a>
                    </div>
                   
                    <div className="flex items-start sm:text-center">
                      <a
                        href="/"
                        className="text-white text-[50px] transition-colors duration-300 hover:text-deep-purple-accent-400"
                      >
                      00<span className='text-[15px]'>S</span>
                      </a>
                    </div>
                   
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="inset-y-0 top-0 right-0 w-[500px] h-[500px] pt-[100px] mb-[500px] max-w-xl px-4 mx-auto  md:px-0 lg:pl-8 lg:pr-0  lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
              <img
                className="object-contain relative w-full h-[100%]  rounded lg:rounded-none lg:shadow-none  lg:h-full sm:w-[100%] sm:h-[500px]"
                src={hero}
                alt=""
              />
              <img
                className="absolute md:top-0 object-cover lg:w-[80vh] h-[50vh] w-[100%] sm:w-[400px] sm:top-[500px]"
                src={splash}
                alt=""
              />
              
            </div>
          </div>
            </div>
         
        );
      };
    


export default Hero