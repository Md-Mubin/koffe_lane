import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='absolute w-full'>
                <div className='w-[1360px] flex justify-between px-6 py-5 rounded-[56px] bg-[#94F4AA] m-auto'>
                    <React.Fragment>
                        <h2>K/L</h2>
                    </React.Fragment>

                    <ul className='flex items-center gap-6'>
                        <li>
                            <Link href={""}>Home</Link>
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
            </nav>
        </>
    )
}

export default Navbar