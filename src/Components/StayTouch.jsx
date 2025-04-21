import React from 'react'

const StayTouch = () => {
    return (
        <>
            <div className='py-[96px] bg-[#94F4AA] rounded-3xl mt-4'>
                <div className="container">
                    <ul className='text-center'>
                        <li>
                            <h2 className='font-bold text-[56px] text-[#000] leading-[60px]'>Stay in touch!</h2>
                        </li>

                        <li className='mt-4 mb-[25px]'>
                            <p className='font-medium text-[16px] text-[#000] leading-[24px]'>Latest offers, news, and goodies to your inbox.</p>
                        </li>

                        <li className='relative w-[523px] flex items-center m-auto'>
                            <input type="text" className='w-full bg-[#fff] outline-0 border-0 rounded-full p-6' placeholder='Your Email Address'/>
                            <button className='absolute right-2 py-[14px] px-5 bg-[#7322FF] rounded-full font-bold text-[16px] text-[#fff] hover:bg-[#814bff] duration-200 cursor-pointer'>Subscribe</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default StayTouch