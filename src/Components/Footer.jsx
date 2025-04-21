import { Archivo } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
const bannerFont = Archivo({ preload: false })

const Footer = () => {
    return (
        <>
            <footer className='py-20 bg-[#7322FF] rounded-3xl mt-4'>
                <div className="container">
                    <div className='w-[380px] m-auto text-center'>
                        <img src="#" alt="" />

                        <h2 className={`text-[80px] font-black text-[#fff] relative z-10 ${bannerFont.className}`}>KOFFEE LANE</h2>

                        <ul className='flex items-center gap-6 mt-[60px] text-[#fff]'>
                            <li>
                                <Link href={"/"}>Home</Link>
                            </li>

                            <li>
                                <Link href={""}>Menu</Link>
                            </li>

                            <li>
                                <Link href={""}>Shop</Link>
                            </li>

                            <li>
                                <Link href={""}>Locations</Link>
                            </li>

                            <li>
                                <Link href={""}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer