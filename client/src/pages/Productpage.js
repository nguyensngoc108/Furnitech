import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
function productpage() {
    return (
        <section className='max-w-[1920px] h-[3140px] bg-brown-400'>

            {/* Header */}
            <div>
                <Header />

            </div>

            {/* Frame 3757 */}
            <div className='
            flex w-[1220.476px] flex-col items-start gap-[70px]
            absolute top-[167px] left-[350px] right-[350px] bottom-[1128px] 
            '>

                {/* Frame 3756 */}
                <div className='flex justify-between items-center self-stretch 
                    
                '>
                    <h1
                        className=' 
                            
                            text-[68px] font-sans font-bold leading-[1.1]  text-black'
                    >
                        What are you {" "}
                        <span
                            className=' block 
                  
                            text-gray-500 text-orange-400 text-[68px] font-dm-sans font-bold leading-[110%]'
                        >
                            looking {" "}
                            <span
                                className='
                            
                            text-gray-500 text-black text-[68px] font-dm-sans font-bold leading-[110%]'
                            >
                                for?
                            </span>
                        </span>

                    </h1>

                    {/* Frame 3755 */}
                    <div className='flex w-[700px] items-center gap-5'>

                        {/* Category 1*/}
                        <div className='w-[160px] h-[200px] flex flex-col items-start gap-5'>
                            <img src='./assets/Furniture.svg' className='
                                w-[160px] h-[160px]
                                rounded-lg bg-lightgray bg-center bg-cover bg-no-repeat shadow-[0px_2px_12px_0px_rgba(20,20,43,0.08)]s
                            ' />
                            <h1 className='
                                self-stretch 
                                text-black font-DM Sans text-4 font-medium leading-5    
                            '>
                                Furniture
                            </h1>
                        </div>
                        {/* Category 2*/}
                        <div className='flex flex-col items-start gap-5'>
                            <img src='./assets/Decoration.svg' className='
                                w-[160px] h-[160px]
                                rounded-lg bg-lightgray bg-center bg-cover bg-no-repeat shadow-[0px_2px_12px_0px_rgba(20,20,43,0.08)]
                            ' />
                            <h1 className='
                                self-stretch 
                                text-black font-DM Sans text-4 font-medium leading-5    
                            '>
                                Decoration
                            </h1>
                        </div>
                        {/* Category 3*/}
                        <div className='flex flex-col items-start gap-5'>
                            <img src='./assets/Storage.svg' className='
                                w-[160px] h-[160px]
                                rounded-lg bg-lightgray bg-center bg-cover bg-no-repeat shadow-[0px_2px_12px_0px_rgba(20,20,43,0.08)]
                            ' />
                            <h1 className='
                                self-stretch 
                                text-black font-DM Sans text-4 font-medium leading-5    
                            '>
                                Storage
                            </h1>
                        </div>
                        {/* Category 4 */}
                        <div className='flex flex-col items-start justify-center  gap-5'>
                            <img src='./assets/Lighting.svg' className='
                                w-[160px] h-[160px]
                                rounded-lg bg-lightgray bg-center bg-cover bg-no-repeat shadow-[0px_2px_12px_0px_rgba(20,20,43,0.08)]
                            ' />
                            <h1 className='
                                self-stretch 
                                text-black font-DM Sans text-4 font-medium leading-5    
                            '>
                                Lighting
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Frame 3759 */}
                <section className=' flex flex-col items-start gap-10 self-stretch'>

                    {/* Filter */}
                    <div className=' flex items-start gap-4'>

                        {/* Filter 1 */}
                        <div className='
                                flex py-1.5 px-4 justify-center items-center gap-[10px]
                                rounded-[20px] bg-brown-600
                            '>
                            <h1 className='text-black text-[14px] font-semibold leading-normal tracking-[0.28px]'>
                                Sort
                            </h1>
                            <a>
                                <img src='./assets/CDown.svg' />
                            </a>
                        </div>

                        {/* Filter 2 */}
                        <div className='
                                flex py-1.5 px-4 justify-center items-center gap-[10px]
                                rounded-[20px] bg-brown-600
                            '>
                            <h1 className='text-black text-[14px] font-semibold leading-normal tracking-[0.28px]'>
                                Material
                            </h1>
                            <a>
                                <img src='./assets/CDown.svg' />
                            </a>
                        </div>

                        {/* Filter 3 */}
                        <div className='
                                flex py-1.5 px-4 justify-center items-center gap-[10px]
                                rounded-[20px] bg-brown-600
                            '>
                            <h1 className='text-black text-[14px] font-semibold leading-normal tracking-[0.28px]'>
                                Color
                            </h1>
                            <a>
                                <img src='./assets/CDown.svg' />
                            </a>
                        </div>

                        {/* Filter 4 */}
                        <div className='
                                flex py-1.5 px-4 justify-center items-center gap-[10px]
                                rounded-[20px] bg-brown-600
                            '>
                            <h1 className='text-black text-[14px] font-semibold leading-normal tracking-[0.28px]'>
                                Price
                            </h1>
                            <a>
                                <img src='./assets/CDown.svg' />
                            </a>
                        </div>

                        {/* Filter 5 */}
                        <div className='
                                flex py-1.5 px-4 justify-center items-center gap-[10px]
                                rounded-[20px] bg-brown-600
                            '>
                            <h1 className='text-black text-[14px] font-semibold leading-normal tracking-[0.28px]'>
                                Space
                            </h1>
                            <a >
                                <img src='./assets/CDown.svg' />
                            </a>
                        </div>

                    </div>

                    {/* Line 2 */}
                    <div class="w-[1220.476px] h-[1px] bg-[#C3BBAB]"></div>

                    {/* Frame 3761 */}
                    <section className='flex justify-between items-center self-stretch'>

                        {/* Filter */}
                        <section className='flex items-start gap-4'>
                            <div className='
                                flex py-1.5 px-4 justify-center items-center gap-[10px]
                                rounded-[20px] bg-brown-600
                            '>
                                <h1 className='text-black text-[14px] font-semibold leading-normal tracking-[0.28px]'>
                                    Wood
                                </h1>
                                <a>
                                    <img src='./assets/CClose.svg' />
                                </a>
                            </div>
                        </section>
                        <h1 className='text-black font-DM Sans text-[14px] font-semibold leading-normal tracking-[0.28px]'>
                            162 Items
                        </h1>

                    </section>

                    {/* Product Listing  */}
                    <section className='flex items-center content-center self-stretch flex-wrap w-[1220px] '>


                        {/* Product Card 1*/}
                        <section className='flex w-[284px] flex-col items-center shadow-[0px_2px_12px_0px_rgba(20,20,43,0.08)] ' >

                            {/* Image */}
                            <div className='h-[284px] relative rounded-lg bg-brown-300'>
                                <div class="relative group w-64 h-64 origin-top-left">

                                    <img
                                        src="./assets/Armchair.svg"
                                        alt="Default"
                                        class="absolute top-[40.1px] left-[55.3px] w-[173.48px] h-[203.73px] origin-top-left object-cover transition-opacity duration-300 group-hover:opacity-0"
                                    />

                                    <img
                                        src="./assets/hover1.svg"
                                        alt="Hover"
                                        class="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    />
                                </div>

                                {/* Discount Tag */}
                                <div className="absolute top-[16px] left-[209px] h-[34px] px-2.5 py-2 bg-[#ff002e] rounded-lg justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-[#f9f7f1] text-sm font-black font-['DM Sans']">-38%</div>
                                </div>


                            </div>

                            {/* Frame 175 */}
                            <div className='flex p-5 flex-col items-start gap-3 self-stretch '>

                                {/* Frame 3739 */}
                                <div className='flex  flex-col items-start self-stretch'>


                                    {/* Product Infor */}
                                    <div className=' flex  flex-col items-start gap-1 self-stretch'>
                                        <h2 className='text-brown-900 font-DM Sans text-[12px] self-stretch '>
                                            Arm Chair
                                        </h2>
                                        <h1 className='w-[188.879px] text-black font-DM Sans font-semibold capitalize'>
                                            Sakarias
                                        </h1>
                                        <h2 className='h-9 self-stretch text-neutral-text-gray font-DM Sans text-[14px] font-normal leading-normal'>
                                            This is the sample product description on 2 lines.
                                        </h2>
                                    </div>
                                </div>

                                {/* Card Bottom */}
                                <div className=' flex justify-between items-center self-stretch '>

                                    {/* Pricing */}
                                    <div className='flex items-center gap-[2px]'>
                                        <h1 className='w-[10.663px] h-[18.279px] text-black font-Inter text-[14px] font-semibold leading-normal'>
                                            $
                                        </h1>
                                        <h1 className='w-[41.127px] h-[25.895px] text-black  font-DM Sans text-[21.325px] font-semibold leading-normal'>
                                            392
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </section>





                        {/* Product Card 2 */}
                        <section className='flex w-[284px] flex-col items-center shadow-[0px_2px_12px_0px_rgba(20,20,43,0.08)] ' >

                            {/* Image */}
                            <div className='h-[284px] relative rounded-lg bg-brown-300'>
                                <div class="relative group w-64 h-64 origin-top-left">

                                    <img
                                        src="./assets/Product2.svg"
                                        alt="Default"
                                        class="absolute top-[40.1px] left-[55.3px] w-[173.48px] h-[203.73px] origin-top-left object-cover transition-opacity duration-300 group-hover:opacity-0"
                                    />

                                    <img
                                        src="./assets/hover1.svg"
                                        alt="Hover"
                                        class="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    />
                                </div>

                                {/* Discount Tag */}
                                <div className="absolute top-[16px] left-[209px] h-[34px] px-2.5 py-2 bg-[#ff002e] rounded-lg justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-[#f9f7f1] text-sm font-black font-['DM Sans']">-38%</div>
                                </div>


                            </div>

                            {/* Frame 175 */}
                            <div className='flex p-5 flex-col items-start gap-3 self-stretch '>

                                {/* Frame 3739 */}
                                <div className='flex  flex-col items-start self-stretch'>


                                    {/* Product Infor */}
                                    <div className=' flex  flex-col items-start gap-1 self-stretch'>
                                        <h2 className='text-brown-900 font-DM Sans text-[12px] self-stretch '>
                                            Arm Chair
                                        </h2>
                                        <h1 className='w-[188.879px] text-black font-DM Sans font-semibold capitalize'>
                                            Sakarias
                                        </h1>
                                        <h2 className='h-9 self-stretch text-neutral-text-gray font-DM Sans text-[14px] font-normal leading-normal'>
                                            This is the sample product description on 2 lines.
                                        </h2>
                                    </div>
                                </div>

                                {/* Card Bottom */}
                                <div className=' flex justify-between items-center self-stretch '>

                                    {/* Pricing */}
                                    <div className='flex items-center gap-[2px]'>
                                        <h1 className='w-[10.663px] h-[18.279px] text-black font-Inter text-[14px] font-semibold leading-normal'>
                                            $
                                        </h1>
                                        <h1 className='w-[41.127px] h-[25.895px] text-black  font-DM Sans text-[21.325px] font-semibold leading-normal'>
                                            392
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </section>





                        {/* Product Card 3 */}
                        <section className='flex w-[284px] flex-col items-center shadow-[0px_2px_12px_0px_rgba(20,20,43,0.08)] ' >

                            {/* Image */}
                            <div className='h-[284px] relative rounded-lg bg-brown-300'>
                                <div class="relative group w-64 h-64 origin-top-left">

                                    <img
                                        src="./assets/Table.svg"
                                        alt="Default"
                                        class="absolute top-[40.1px] left-[55.3px] w-[173.48px] h-[203.73px] origin-top-left object-cover transition-opacity duration-300 group-hover:opacity-0"
                                    />

                                    <img
                                        src="./assets/hover1.svg"
                                        alt="Hover"
                                        class="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    />
                                </div>

                                {/* Discount Tag */}
                                <div className="absolute top-[16px] left-[209px] h-[34px] px-2.5 py-2 bg-[#ff002e] rounded-lg justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-[#f9f7f1] text-sm font-black font-['DM Sans']">-38%</div>
                                </div>


                            </div>

                            {/* Frame 175 */}
                            <div className='flex p-5 flex-col items-start gap-3 self-stretch '>

                                {/* Frame 3739 */}
                                <div className='flex  flex-col items-start self-stretch'>


                                    {/* Product Infor */}
                                    <div className=' flex  flex-col items-start gap-1 self-stretch'>
                                        <h2 className='text-brown-900 font-DM Sans text-[12px] self-stretch '>
                                            Arm Chair
                                        </h2>
                                        <h1 className='w-[188.879px] text-black font-DM Sans font-semibold capitalize'>
                                            Sakarias
                                        </h1>
                                        <h2 className='h-9 self-stretch text-neutral-text-gray font-DM Sans text-[14px] font-normal leading-normal'>
                                            This is the sample product description on 2 lines.
                                        </h2>
                                    </div>
                                </div>

                                {/* Card Bottom */}
                                <div className=' flex justify-between items-center self-stretch '>

                                    {/* Pricing */}
                                    <div className='flex items-center gap-[2px]'>
                                        <h1 className='w-[10.663px] h-[18.279px] text-black font-Inter text-[14px] font-semibold leading-normal'>
                                            $
                                        </h1>
                                        <h1 className='w-[41.127px] h-[25.895px] text-black  font-DM Sans text-[21.325px] font-semibold leading-normal'>
                                            392
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </section>


                        {/* Product Card 4 */}
                        <section className='flex w-[284px] flex-col items-center shadow-[0px_2px_12px_0px_rgba(20,20,43,0.08)] ' >

                            {/* Image */}
                            <div className='h-[284px] relative rounded-lg bg-brown-300'>
                                <div class="relative group w-64 h-64 origin-top-left">

                                    <img
                                        src="./assets/4Chair.svg"
                                        alt="Default"
                                        class="absolute top-[40.1px] left-[55.3px] w-[173.48px] h-[203.73px] origin-top-left object-cover transition-opacity duration-300 group-hover:opacity-0"
                                    />

                                    <img
                                        src="./assets/hover1.svg"
                                        alt="Hover"
                                        class="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    />
                                </div>

                                {/* Discount Tag */}
                                <div className="absolute top-[16px] left-[209px] h-[34px] px-2.5 py-2 bg-[#ff002e] rounded-lg justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-[#f9f7f1] text-sm font-black font-['DM Sans']">-38%</div>
                                </div>


                            </div>

                            {/* Frame 175 */}
                            <div className='flex p-5 flex-col items-start gap-3 self-stretch '>

                                {/* Frame 3739 */}
                                <div className='flex  flex-col items-start self-stretch'>


                                    {/* Product Infor */}
                                    <div className=' flex  flex-col items-start gap-1 self-stretch'>
                                        <h2 className='text-brown-900 font-DM Sans text-[12px] self-stretch '>
                                            Arm Chair
                                        </h2>
                                        <h1 className='w-[188.879px] text-black font-DM Sans font-semibold capitalize'>
                                            Sakarias
                                        </h1>
                                        <h2 className='h-9 self-stretch text-neutral-text-gray font-DM Sans text-[14px] font-normal leading-normal'>
                                            This is the sample product description on 2 lines.
                                        </h2>
                                    </div>
                                </div>

                                {/* Card Bottom */}
                                <div className=' flex justify-between items-center self-stretch '>

                                    {/* Pricing */}
                                    <div className='flex items-center gap-[2px]'>
                                        <h1 className='w-[10.663px] h-[18.279px] text-black font-Inter text-[14px] font-semibold leading-normal'>
                                            $
                                        </h1>
                                        <h1 className='w-[41.127px] h-[25.895px] text-black  font-DM Sans text-[21.325px] font-semibold leading-normal'>
                                            392
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Product Card 5 */}
                        <section className='flex w-[284px] flex-col items-center shadow-[0px_2px_12px_0px_rgba(20,20,43,0.08)] ' >

                            {/* Image */}
                            <div className='h-[284px] relative rounded-lg bg-brown-300'>
                                <div class="relative group w-64 h-64 origin-top-left">

                                    <img
                                        src="./assets/YChair.svg"
                                        alt="Default"
                                        class="absolute top-[40.1px] left-[55.3px] w-[173.48px] h-[203.73px] origin-top-left object-cover transition-opacity duration-300 group-hover:opacity-0"
                                    />

                                    <img
                                        src="./assets/hover1.svg"
                                        alt="Hover"
                                        class="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    />
                                </div>

                                {/* Discount Tag */}
                                <div className="absolute top-[16px] left-[209px] h-[34px] px-2.5 py-2 bg-[#ff002e] rounded-lg justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-[#f9f7f1] text-sm font-black font-['DM Sans']">-38%</div>
                                </div>


                            </div>

                            {/* Frame 175 */}
                            <div className='flex p-5 flex-col items-start gap-3 self-stretch '>

                                {/* Frame 3739 */}
                                <div className='flex  flex-col items-start self-stretch'>


                                    {/* Product Infor */}
                                    <div className=' flex  flex-col items-start gap-1 self-stretch'>
                                        <h2 className='text-brown-900 font-DM Sans text-[12px] self-stretch '>
                                            Arm Chair
                                        </h2>
                                        <h1 className='w-[188.879px] text-black font-DM Sans font-semibold capitalize'>
                                            Sakarias
                                        </h1>
                                        <h2 className='h-9 self-stretch text-neutral-text-gray font-DM Sans text-[14px] font-normal leading-normal'>
                                            This is the sample product description on 2 lines.
                                        </h2>
                                    </div>
                                </div>

                                {/* Card Bottom */}
                                <div className=' flex justify-between items-center self-stretch '>

                                    {/* Pricing */}
                                    <div className='flex items-center gap-[2px]'>
                                        <h1 className='w-[10.663px] h-[18.279px] text-black font-Inter text-[14px] font-semibold leading-normal'>
                                            $
                                        </h1>
                                        <h1 className='w-[41.127px] h-[25.895px] text-black  font-DM Sans text-[21.325px] font-semibold leading-normal'>
                                            392
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </section>


                        {/* Product Card 6 */}
                        <section className='flex w-[284px] flex-col items-center shadow-[0px_2px_12px_0px_rgba(20,20,43,0.08)] ' >

                            {/* Image */}
                            <div className='h-[284px] relative rounded-lg bg-brown-300'>
                                <div class="relative group w-64 h-64 origin-top-left">

                                    <img
                                        src="./assets/Product6.svg"
                                        alt="Default"
                                        class="absolute top-[40.1px] left-[55.3px] w-[173.48px] h-[203.73px] origin-top-left object-cover transition-opacity duration-300 group-hover:opacity-0"
                                    />

                                    <img
                                        src="./assets/hover1.svg"
                                        alt="Hover"
                                        class="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    />
                                </div>

                                {/* Discount Tag */}
                                <div className="absolute top-[16px] left-[209px] h-[34px] px-2.5 py-2 bg-[#ff002e] rounded-lg justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-[#f9f7f1] text-sm font-black font-['DM Sans']">-38%</div>
                                </div>


                            </div>

                            {/* Frame 175 */}
                            <div className='flex p-5 flex-col items-start gap-3 self-stretch '>

                                {/* Frame 3739 */}
                                <div className='flex  flex-col items-start self-stretch'>


                                    {/* Product Infor */}
                                    <div className=' flex  flex-col items-start gap-1 self-stretch'>
                                        <h2 className='text-brown-900 font-DM Sans text-[12px] self-stretch '>
                                            Arm Chair
                                        </h2>
                                        <h1 className='w-[188.879px] text-black font-DM Sans font-semibold capitalize'>
                                            Sakarias
                                        </h1>
                                        <h2 className='h-9 self-stretch text-neutral-text-gray font-DM Sans text-[14px] font-normal leading-normal'>
                                            This is the sample product description on 2 lines.
                                        </h2>
                                    </div>
                                </div>

                                {/* Card Bottom */}
                                <div className=' flex justify-between items-center self-stretch '>

                                    {/* Pricing */}
                                    <div className='flex items-center gap-[2px]'>
                                        <h1 className='w-[10.663px] h-[18.279px] text-black font-Inter text-[14px] font-semibold leading-normal'>
                                            $
                                        </h1>
                                        <h1 className='w-[41.127px] h-[25.895px] text-black  font-DM Sans text-[21.325px] font-semibold leading-normal'>
                                            392
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </section>


                        {/* Product Card 7 */}
                        <section className='flex w-[284px] flex-col items-center shadow-[0px_2px_12px_0px_rgba(20,20,43,0.08)] ' >

                            {/* Image */}
                            <div className='h-[284px] relative rounded-lg bg-brown-300'>
                                <div class="relative group w-64 h-64 origin-top-left">

                                    <img
                                        src="./assets/Product7.svg"
                                        alt="Default"
                                        class="absolute top-[40.1px] left-[55.3px] w-[173.48px] h-[203.73px] origin-top-left object-cover transition-opacity duration-300 group-hover:opacity-0"
                                    />

                                    <img
                                        src="./assets/hover1.svg"
                                        alt="Hover"
                                        class="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    />
                                </div>

                                {/* Discount Tag */}
                                <div className="absolute top-[16px] left-[209px] h-[34px] px-2.5 py-2 bg-[#ff002e] rounded-lg justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-[#f9f7f1] text-sm font-black font-['DM Sans']">-38%</div>
                                </div>


                            </div>

                            {/* Frame 175 */}
                            <div className='flex p-5 flex-col items-start gap-3 self-stretch '>

                                {/* Frame 3739 */}
                                <div className='flex  flex-col items-start self-stretch'>


                                    {/* Product Infor */}
                                    <div className=' flex  flex-col items-start gap-1 self-stretch'>
                                        <h2 className='text-brown-900 font-DM Sans text-[12px] self-stretch '>
                                            Arm Chair
                                        </h2>
                                        <h1 className='w-[188.879px] text-black font-DM Sans font-semibold capitalize'>
                                            Sakarias
                                        </h1>
                                        <h2 className='h-9 self-stretch text-neutral-text-gray font-DM Sans text-[14px] font-normal leading-normal'>
                                            This is the sample product description on 2 lines.
                                        </h2>
                                    </div>
                                </div>

                                {/* Card Bottom */}
                                <div className=' flex justify-between items-center self-stretch '>

                                    {/* Pricing */}
                                    <div className='flex items-center gap-[2px]'>
                                        <h1 className='w-[10.663px] h-[18.279px] text-black font-Inter text-[14px] font-semibold leading-normal'>
                                            $
                                        </h1>
                                        <h1 className='w-[41.127px] h-[25.895px] text-black  font-DM Sans text-[21.325px] font-semibold leading-normal'>
                                            392
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </section>


                        {/* Product Card 8 */}
                        <section className='flex w-[284px] flex-col items-center shadow-[0px_2px_12px_0px_rgba(20,20,43,0.08)] ' >

                            {/* Image */}
                            <div className='h-[284px] relative rounded-lg bg-brown-300'>
                                <div class="relative group w-64 h-64 origin-top-left">

                                    <img
                                        src="./assets/Product8.svg"
                                        alt="Default"
                                        class="absolute top-[40.1px] left-[55.3px] w-[173.48px] h-[203.73px] origin-top-left object-cover transition-opacity duration-300 group-hover:opacity-0"
                                    />

                                    <img
                                        src="./assets/hover1.svg"
                                        alt="Hover"
                                        class="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    />
                                </div>

                                {/* Discount Tag */}
                                <div className="absolute top-[16px] left-[209px] h-[34px] px-2.5 py-2 bg-[#ff002e] rounded-lg justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-[#f9f7f1] text-sm font-black font-['DM Sans']">-38%</div>
                                </div>


                            </div>

                            {/* Frame 175 */}
                            <div className='flex p-5 flex-col items-start gap-3 self-stretch '>

                                {/* Frame 3739 */}
                                <div className='flex  flex-col items-start self-stretch'>


                                    {/* Product Infor */}
                                    <div className=' flex  flex-col items-start gap-1 self-stretch'>
                                        <h2 className='text-brown-900 font-DM Sans text-[12px] self-stretch '>
                                            Arm Chair
                                        </h2>
                                        <h1 className='w-[188.879px] text-black font-DM Sans font-semibold capitalize'>
                                            Sakarias
                                        </h1>
                                        <h2 className='h-9 self-stretch text-neutral-text-gray font-DM Sans text-[14px] font-normal leading-normal'>
                                            This is the sample product description on 2 lines.
                                        </h2>
                                    </div>
                                </div>

                                {/* Card Bottom */}
                                <div className=' flex justify-between items-center self-stretch '>

                                    {/* Pricing */}
                                    <div className='flex items-center gap-[2px]'>
                                        <h1 className='w-[10.663px] h-[18.279px] text-black font-Inter text-[14px] font-semibold leading-normal'>
                                            $
                                        </h1>
                                        <h1 className='w-[41.127px] h-[25.895px] text-black  font-DM Sans text-[21.325px] font-semibold leading-normal'>
                                            392
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </section>


                        {/* Product Card 9*/}
                        <section className='flex w-[284px] flex-col items-center shadow-[0px_2px_12px_0px_rgba(20,20,43,0.08)] ' >

                            {/* Image */}
                            <div className='h-[284px] relative rounded-lg bg-brown-300'>
                                <div class="relative group w-64 h-64 origin-top-left">

                                    <img
                                        src="./assets/Armchair.svg"
                                        alt="Default"
                                        class="absolute top-[40.1px] left-[55.3px] w-[173.48px] h-[203.73px] origin-top-left object-cover transition-opacity duration-300 group-hover:opacity-0"
                                    />

                                    <img
                                        src="./assets/hover1.svg"
                                        alt="Hover"
                                        class="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    />
                                </div>

                                {/* Discount Tag */}
                                <div className="absolute top-[16px] left-[209px] h-[34px] px-2.5 py-2 bg-[#ff002e] rounded-lg justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-[#f9f7f1] text-sm font-black font-['DM Sans']">-38%</div>
                                </div>


                            </div>

                            {/* Frame 175 */}
                            <div className='flex p-5 flex-col items-start gap-3 self-stretch '>

                                {/* Frame 3739 */}
                                <div className='flex  flex-col items-start self-stretch'>


                                    {/* Product Infor */}
                                    <div className=' flex  flex-col items-start gap-1 self-stretch'>
                                        <h2 className='text-brown-900 font-DM Sans text-[12px] self-stretch '>
                                            Arm Chair
                                        </h2>
                                        <h1 className='w-[188.879px] text-black font-DM Sans font-semibold capitalize'>
                                            Sakarias
                                        </h1>
                                        <h2 className='h-9 self-stretch text-neutral-text-gray font-DM Sans text-[14px] font-normal leading-normal'>
                                            This is the sample product description on 2 lines.
                                        </h2>
                                    </div>
                                </div>

                                {/* Card Bottom */}
                                <div className=' flex justify-between items-center self-stretch '>

                                    {/* Pricing */}
                                    <div className='flex items-center gap-[2px]'>
                                        <h1 className='w-[10.663px] h-[18.279px] text-black font-Inter text-[14px] font-semibold leading-normal'>
                                            $
                                        </h1>
                                        <h1 className='w-[41.127px] h-[25.895px] text-black  font-DM Sans text-[21.325px] font-semibold leading-normal'>
                                            392
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </section>


                        {/* Product Card 10*/}
                        <section className='flex w-[284px] flex-col items-center shadow-[0px_2px_12px_0px_rgba(20,20,43,0.08)] ' >

                            {/* Image */}
                            <div className='h-[284px] relative rounded-lg bg-brown-300'>
                                <div class="relative group w-64 h-64 origin-top-left">

                                    <img
                                        src="./assets/Armchair.svg"
                                        alt="Default"
                                        class="absolute top-[40.1px] left-[55.3px] w-[173.48px] h-[203.73px] origin-top-left object-cover transition-opacity duration-300 group-hover:opacity-0"
                                    />

                                    <img
                                        src="./assets/hover1.svg"
                                        alt="Hover"
                                        class="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    />
                                </div>

                                {/* Discount Tag */}
                                <div className="absolute top-[16px] left-[209px] h-[34px] px-2.5 py-2 bg-[#ff002e] rounded-lg justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-[#f9f7f1] text-sm font-black font-['DM Sans']">-38%</div>
                                </div>


                            </div>

                            {/* Frame 175 */}
                            <div className='flex p-5 flex-col items-start gap-3 self-stretch '>

                                {/* Frame 3739 */}
                                <div className='flex  flex-col items-start self-stretch'>


                                    {/* Product Infor */}
                                    <div className=' flex  flex-col items-start gap-1 self-stretch'>
                                        <h2 className='text-brown-900 font-DM Sans text-[12px] self-stretch '>
                                            Arm Chair
                                        </h2>
                                        <h1 className='w-[188.879px] text-black font-DM Sans font-semibold capitalize'>
                                            Sakarias
                                        </h1>
                                        <h2 className='h-9 self-stretch text-neutral-text-gray font-DM Sans text-[14px] font-normal leading-normal'>
                                            This is the sample product description on 2 lines.
                                        </h2>
                                    </div>
                                </div>

                                {/* Card Bottom */}
                                <div className=' flex justify-between items-center self-stretch '>

                                    {/* Pricing */}
                                    <div className='flex items-center gap-[2px]'>
                                        <h1 className='w-[10.663px] h-[18.279px] text-black font-Inter text-[14px] font-semibold leading-normal'>
                                            $
                                        </h1>
                                        <h1 className='w-[41.127px] h-[25.895px] text-black  font-DM Sans text-[21.325px] font-semibold leading-normal'>
                                            392
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </section>


                        {/* Product Card 11*/}
                        <section className='flex w-[284px] flex-col items-center shadow-[0px_2px_12px_0px_rgba(20,20,43,0.08)] ' >

                            {/* Image */}
                            <div className='h-[284px] relative rounded-lg bg-brown-300'>
                                <div class="relative group w-64 h-64 origin-top-left">

                                    <img
                                        src="./assets/Armchair.svg"
                                        alt="Default"
                                        class="absolute top-[40.1px] left-[55.3px] w-[173.48px] h-[203.73px] origin-top-left object-cover transition-opacity duration-300 group-hover:opacity-0"
                                    />

                                    <img
                                        src="./assets/hover1.svg"
                                        alt="Hover"
                                        class="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    />
                                </div>

                                {/* Discount Tag */}
                                <div className="absolute top-[16px] left-[209px] h-[34px] px-2.5 py-2 bg-[#ff002e] rounded-lg justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-[#f9f7f1] text-sm font-black font-['DM Sans']">-38%</div>
                                </div>


                            </div>

                            {/* Frame 175 */}
                            <div className='flex p-5 flex-col items-start gap-3 self-stretch '>

                                {/* Frame 3739 */}
                                <div className='flex  flex-col items-start self-stretch'>


                                    {/* Product Infor */}
                                    <div className=' flex  flex-col items-start gap-1 self-stretch'>
                                        <h2 className='text-brown-900 font-DM Sans text-[12px] self-stretch '>
                                            Arm Chair
                                        </h2>
                                        <h1 className='w-[188.879px] text-black font-DM Sans font-semibold capitalize'>
                                            Sakarias
                                        </h1>
                                        <h2 className='h-9 self-stretch text-neutral-text-gray font-DM Sans text-[14px] font-normal leading-normal'>
                                            This is the sample product description on 2 lines.
                                        </h2>
                                    </div>
                                </div>

                                {/* Card Bottom */}
                                <div className=' flex justify-between items-center self-stretch '>

                                    {/* Pricing */}
                                    <div className='flex items-center gap-[2px]'>
                                        <h1 className='w-[10.663px] h-[18.279px] text-black font-Inter text-[14px] font-semibold leading-normal'>
                                            $
                                        </h1>
                                        <h1 className='w-[41.127px] h-[25.895px] text-black  font-DM Sans text-[21.325px] font-semibold leading-normal'>
                                            392
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </section>


                        {/* Product Card 12*/}
                        <section className='flex w-[284px] flex-col items-center shadow-[0px_2px_12px_0px_rgba(20,20,43,0.08)] ' >

                            {/* Image */}
                            <div className='h-[284px] relative rounded-lg bg-brown-300'>
                                <div class="relative group w-64 h-64 origin-top-left">

                                    <img
                                        src="./assets/Armchair.svg"
                                        alt="Default"
                                        class="absolute top-[40.1px] left-[55.3px] w-[173.48px] h-[203.73px] origin-top-left object-cover transition-opacity duration-300 group-hover:opacity-0"
                                    />

                                    <img
                                        src="./assets/hover1.svg"
                                        alt="Hover"
                                        class="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    />
                                </div>

                                {/* Discount Tag */}
                                <div className="absolute top-[16px] left-[209px] h-[34px] px-2.5 py-2 bg-[#ff002e] rounded-lg justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-[#f9f7f1] text-sm font-black font-['DM Sans']">-38%</div>
                                </div>


                            </div>

                            {/* Frame 175 */}
                            <div className='flex p-5 flex-col items-start gap-3 self-stretch '>

                                {/* Frame 3739 */}
                                <div className='flex  flex-col items-start self-stretch'>


                                    {/* Product Infor */}
                                    <div className=' flex  flex-col items-start gap-1 self-stretch'>
                                        <h2 className='text-brown-900 font-DM Sans text-[12px] self-stretch '>
                                            Arm Chair
                                        </h2>
                                        <h1 className='w-[188.879px] text-black font-DM Sans font-semibold capitalize'>
                                            Sakarias
                                        </h1>
                                        <h2 className='h-9 self-stretch text-neutral-text-gray font-DM Sans text-[14px] font-normal leading-normal'>
                                            This is the sample product description on 2 lines.
                                        </h2>
                                    </div>
                                </div>

                                {/* Card Bottom */}
                                <div className=' flex justify-between items-center self-stretch '>

                                    {/* Pricing */}
                                    <div className='flex items-center gap-[2px]'>
                                        <h1 className='w-[10.663px] h-[18.279px] text-black font-Inter text-[14px] font-semibold leading-normal'>
                                            $
                                        </h1>
                                        <h1 className='w-[41.127px] h-[25.895px] text-black  font-DM Sans text-[21.325px] font-semibold leading-normal'>
                                            392
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>


                </section>
            </div>

            {/* Footer
            <div>
                <Footer />
            </div> */}
        </section>
    )
}

export default productpage
