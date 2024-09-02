import React, { useEffect, useRef } from 'react';
import {motion, useAnimation, useInView} from "framer-motion"

import { isVisible } from '@testing-library/user-event/dist/utils';

const CallToAction = () => {
    const {innerWidth: Width} = window;
    const ref = useRef();
    const isInView = useInView(ref)
    const mainControlls = useAnimation(isInView);

    useEffect(() => {
        if(isInView) {
            mainControlls.start("visible")
        }
    }, [isInView])

  return (
    <div>
        <div className='w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500'></div>
        <>
            <section className="py-20 lg:py-[120px] bg-white dark:bg-dark bg-gray-100/50 font-poppins">
                <div className="container mx-auto">
                    <div
                        className="bg-blue-800 relative z-10 sm:-mt-10 sm:-mb-10 overflow-hidden rounded bg-primary py-12 px-8 md:p-[70px]"
                        >
                        <div className="flex flex-wrap items-center -mx-4">
                            <motion.div 
                            ref={ref}
                                variants={{
                                    visible: {opacity: 1, x: 0},
                                    hidden: {opacity: 0, x: -75}
                                }}
                                initial = "hidden"
                                animate= {mainControlls}
                                transition={{duration: 0.4, delay: 0.20}}
                                className="w-full px-4 lg:w-1/2">
                                <span className="block mb-4 text-base font-medium text-white">
                                Find the perfect team to realise your business goals!
                                </span>
                                <h2
                                    className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[40px]/[48px] lg:mb-0"
                                    >
                                    <span className="xs:block">Get started Today and let us</span>
                                    <span>Take Care of the <span className='text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-emerald-400'>Rest!</span></span>
                                </h2>
                            </motion.div>
                            <div className="w-full px-4 lg:w-1/2">
                            <div className="flex sm:flex-wrap sm:justify-end">
                                <motion.div
                                    ref={ref}
                                    variants={{
                                        visible: {opacity: 1, x: 0},
                                        hidden: {opacity: 0, x: 75}
                                    }}
                                    initial = "hidden"
                                    animate= {mainControlls}
                                    transition={{duration: 0.4, delay: 0.45}}
                                >
                                    <button
                                        href="#"
                                        className="hover:bg-blue-500 inline-flex py-3 my-1 mr-4 text-base font-medium transition bg-white rounded-md hover:bg-shadow-1 text-primary px-7"
                                        >
                                    Talk to a Agent
                                    </button>
                                </motion.div>
                                <motion.div
                                    ref={ref}
                                    variants={{
                                        visible: {opacity: 1, x: 0},
                                        hidden: {opacity: 0, x: -75}
                                    }}
                                    initial = "hidden"
                                    animate= {mainControlls}
                                    transition={{duration: 0.4, delay: 0.5}}
                                >
                                    <button
                                        href="#"
                                        className="inline-flex py-3 my-1 bg-[#1c9b7b] text-base font-medium text-white transition rounded-md bg-secondary px-7 hover:bg-opacity-90"
                                        >
                                    Get Started 
                                    </button>
                                </motion.div>
                            </div>
                            </div>
                        </div>
                        <div>
                            <span className="absolute top-0 left-0 z-[-1]">
                            <svg
                                width="189"
                                height="162"
                                viewBox="0 0 189 162"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <ellipse
                                    cx="16"
                                    cy="-16.5"
                                    rx="173"
                                    ry="178.5"
                                    transform="rotate(180 16 -16.5)"
                                    fill="url(#paint0_linear)"
                                    />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear"
                                        x1="-157"
                                        y1="-107.754"
                                        x2="98.5011"
                                        y2="-106.425"
                                        gradientUnits="userSpaceOnUse"
                                        >
                                        <stop stop-color="white" stop-opacity="0.07" />
                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            </span>
                            <span className="absolute bottom-0 right-0 z-[-1]">
                            <svg
                                width="191"
                                height="208"
                                viewBox="0 0 191 208"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <ellipse
                                    cx="173"
                                    cy="178.5"
                                    rx="173"
                                    ry="178.5"
                                    fill="url(#paint0_linear)"
                                    />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear"
                                        x1="-3.27832e-05"
                                        y1="87.2457"
                                        x2="255.501"
                                        y2="88.5747"
                                        gradientUnits="userSpaceOnUse"
                                        >
                                        <stop stop-color="white" stop-opacity="0.07" />
                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
        <div className='flex justify-end ml-[30%] w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500'></div>
    </div>
  )
}

export default CallToAction
