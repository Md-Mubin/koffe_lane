"use client"
import { Archivo } from 'next/font/google'
import React from 'react'
const bannerFont = Archivo({ preload: false })
import 'aos/dist/aos.css';

const Banner = () => {
    return (
        <>
            <section className='w-full h-[100dvh] bg-[#7322FF] rounded-3xl pt-[255px] overflow-hidden'>
                <div className="container">
                    <ul className='relative'>
                        <li className='w-[930px] text-center m-auto'>
                            <h1 className={`text-[210px] font-black text-[#fff] leading-[190px] relative z-10 ${bannerFont.className}`}>KOFFEE LANE</h1>
                        </li>

                        <li className='flex justify-center'>
                            <img data-aos="fade-up" data-aos-duration="800" data-aos-delay="800" loading='lazy' className='absolute top-32' src="/img/banner_img.png" alt="banner img" />
                            <img data-aos="fade-up" data-aos-duration="200" data-aos-delay="1300" loading='lazy' className='absolute w-[400px] top-[-100px] left-[30%] z-40' src="/img/banner_img2.png" alt="banner img" />
                            <img loading='lazy' className='absolute top-32 left-[65%] z-50 animate-bounce' src="/img/badge.png" alt="badge" />
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Banner