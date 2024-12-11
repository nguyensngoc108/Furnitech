import React from 'react'
import Header from './header'
import { Link } from 'react-router-dom';
function productpage() {

    function goToProductPage() {
        window.location.href = 'productpage.js'; // Chuyển hướng đến trang
    }
    return (

        < section className='max-w-[1920px] h-[3140px]' >

            {/* Header */}
            < Header />

            {/* Frame 3757 */}
            < section className='flex w-[1220.476px] flex-col items-start gap-[70px]' >

                {/* Frame 3756 */}
                <div div className='flex justify-between items-center self-stretch' >
                    <h1>
                        What are you
                        looking
                        for?
                    </h1>
                </div >
            </section >
        </section >


    )
}

export default productpage
