import React from 'react'

function Footer() {
    return (
        <section className=' 
        flex justify-center items-center self-stretch  px-[350px] py-[100.002px] sm:py-[109.998px]
        bg-brown-600
        '>
            {/* wrapper */}
            <div className='flex w-[1220px] justify-between items-start'>
                {/* Frame 3748 */}
                <div className='flex w-[288.855px] flex-col items-start gap-[18px] shrink-0'>

                    {/* Logo */}
                    <div className='flex items-center gap-2 py-[1px] px-0'>
                        <img src='./assets/Cir.svg' alt='Logo'
                            className='
                    w-[39px] h-[37px]
                    fill-brown-1000 '/>
                        <h1 className='
                    text-black font-DM Sans text-[32px]  font-extrabold leading-normal tracking-[0.64px]
                '>
                            Funitech
                        </h1>
                    </div>

                    <h2 className='
                    self-stretch font-DM Sans text-[18px] font-normal leading-[30px]
                '>
                        Copyright © 2024 Furnitech | All Rights Reserved
                    </h2>
                </div>

                {/* Footer Content */}
                <div className='flex items-start gap-[60px] '>

                    {/* Footer section: Product */}
                    <div className='flex flex-col items-start gap-8'>
                        <h1 className='self-stretch text-black font-DM Sans text-[20px] font-semibold leading-[20px]'>
                            Product
                        </h1>

                        {/* Link Group  */}
                        <div className='flex flex-col items-start gap-[18px]'>
                            <a href='/'
                                className='flex items-start'>
                                <h1 className='
                                    text-neutral-text-gray font-DM Sans text-[18px] font-normal leading-[18px]
                                '>
                                    Categories
                                </h1>
                            </a>
                            <a href='/'
                                className='flex items-start'>
                                <h1 className='
                                    text-neutral-text-gray font-DM Sans text-[18px] font-normal leading-[18px]
                                '>
                                    Reviews
                                </h1>
                            </a>
                            <a href='/'
                                className='flex items-start'>
                                <h1 className='
                                    text-neutral-text-gray font-DM Sans text-[18px] font-normal leading-[18px]
                                '>
                                    New Colections
                                </h1>
                            </a>
                        </div>
                    </div>

                    {/* Footer section: Company */}
                    <div className='flex flex-col items-start w-[94px] gap-8'>
                        <h1 className=' text-black font-DM Sans text-[20px] font-semibold leading-[20px]'>
                            Company
                        </h1>

                        {/* Link Group  */}
                        <div className='flex flex-col items-start gap-[18px]'>
                            <a href='/'
                                className='flex items-start'>
                                <h1 className='
                                    text-neutral-text-gray text-center font-DM Sans text-[18px] font-normal leading-[18px]
                                '>
                                    About
                                </h1>
                            </a>
                            <a href='/'
                                className='flex items-start'>
                                <h1 className='
                                    text-neutral-text-gray text-center font-DM Sans text-[18px] font-normal leading-[18px]
                                '>
                                    Contact Us
                                </h1>
                            </a>

                        </div>
                    </div>

                    {/* Footer section: Support */}
                    <div className='flex flex-col items-start w-[127px] gap-8'>
                        <h1 className=' self-stretch text-black font-DM Sans text-[20px] font-semibold leading-[20px]'>
                            Support
                        </h1>

                        {/* Link Group  */}
                        <div className='flex flex-col items-start gap-[18px]'>
                            <a href='/'
                                className='flex items-start'>
                                <h1 className='
                                    text-neutral-text-gray text-center font-DM Sans text-[18px] font-normal leading-[18px]
                                '>
                                    Help center
                                </h1>
                            </a>
                            <a href='/'
                                className='flex items-start'>
                                <h1 className='
                                    text-neutral-text-gray text-center font-DM Sans text-[18px] font-normal leading-[18px]
                                '>
                                    Chat support
                                </h1>
                            </a>

                        </div>
                    </div>

                    {/* Footer section: Follow us */}
                    <div className='flex w-[115px] flex-col items-start gap-8'>
                        <h1 className='self-stretch text-black font-DM Sans text-[20px] font-bold leading-[20px]'>
                            Follow us
                        </h1>
                        {/* Link group */}
                        <div className='flex flex-col items-start w-[115px] h-[192px] gap-[18px] '>

                            {/* Facebook */}
                            <div >
                                <a href='/'
                                    className='flex items-center w-[114px] h-[24px] shrink-0 gap-2'>
                                    <img src='./assets/Facebook.svg' alt='Facebook' className='w-6 h-6 shrink-0' />
                                    {/* Link */}
                                    <div className=' inline-flex items-start'>
                                        <div className=' flex items-center '>
                                            <h1 className='
                                             text-center 
                                            text-neutral-text-gray font-DM Sans text-[18px] font-normal leading-[18px]
                                        '>
                                                Facebook
                                            </h1>
                                        </div>

                                    </div>

                                </a>
                            </div>


                            {/* Twitter */}
                            <div >
                                <a href='/'
                                    className='flex items-center w-[90px] h-[24px] shrink-0 gap-2'>
                                    <img src='./assets/Twitter.svg' alt='Facebook' className='w-6 h-6 shrink-0' />
                                    {/* Link */}
                                    <div className=' inline-flex items-start'>
                                        <div className=' flex items-center '>
                                            <h1 className='
                                             text-center 
                                            text-neutral-text-gray font-DM Sans text-[18px] font-normal leading-[18px]
                                        '>
                                                Twitter
                                            </h1>
                                        </div>

                                    </div>

                                </a>
                            </div>

                            {/* Instagram */}
                            <div >
                                <a href='/'
                                    className='flex items-center w-[115px] h-[24px] shrink-0 gap-2'>
                                    <img src='./assets/Instagram.svg' alt='Facebook' className='w-6 h-6 shrink-0' />
                                    {/* Link */}
                                    <div className=' inline-flex items-start'>
                                        <div className=' flex items-center '>
                                            <h1 className='
                                             text-center 
                                            text-neutral-text-gray font-DM Sans text-[18px] font-normal leading-[18px]
                                        '>
                                                Instagram
                                            </h1>
                                        </div>

                                    </div>

                                </a>
                            </div>

                            {/* Linkedin */}
                            <div >
                                <a href='/'
                                    className='flex items-center w-[101px] h-[24px] shrink-0 gap-2'>
                                    <img src='./assets/LinkedIn.svg' alt='Facebook' className='w-6 h-6 shrink-0' />
                                    {/* Link */}
                                    <div className=' inline-flex items-start'>
                                        <div className=' flex items-center '>
                                            <h1 className='
                                             text-center 
                                            text-neutral-text-gray font-DM Sans text-[18px] font-normal leading-[18px]
                                        '>
                                                LinkedIn
                                            </h1>
                                        </div>

                                    </div>

                                </a>
                            </div>

                            {/* Youtube */}
                            <div >
                                <a href='/'
                                    className='flex items-center w-[103px] h-[24px] shrink-0 gap-2'>
                                    <img src='./assets/Youtube.svg' alt='Facebook' className='w-6 h-6 shrink-0' />
                                    {/* Link */}
                                    <div className=' inline-flex items-start'>
                                        <div className=' flex items-center '>
                                            <h1 className='
                                             text-center 
                                            text-neutral-text-gray font-DM Sans text-[18px] font-normal leading-[18px]
                                        '>
                                                Youtube
                                            </h1>
                                        </div>

                                    </div>

                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
