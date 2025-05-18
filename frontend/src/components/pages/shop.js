import React, { useRef } from 'react'
import { IoPerson } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import { PiChatsDuotone } from "react-icons/pi";


function ShopPage() {
    const page2Ref = useRef(null);
    const page3Ref = useRef(null);
    const page4Ref = useRef(null);

    const scrollToPage2 = () => {
        page2Ref.current?.scrollIntoView({ behavior: 'smooth'});
    };

    const scrollToPage3 = () => {
        page3Ref.current?.scrollIntoView({ behavior: 'smooth'});
    };

    const scrollToPage4 = () => {
        page4Ref.current?.scrollIntoView({ behavior: 'smooth'});
    };

    return (
        <div className='Shop-page'>
            <div className='page-1'>
                <nav className='nav-bar-1'>
                    <div className='title-container'>
                        <p className='title-text'>
                            Rivera Veterinary Clinic
                        </p>
                    </div>
                    <div className='btn-container'>
                        <button className='btn-group'>
                            Home
                        </button>
                        <button className='btn-group' onClick={scrollToPage2}>
                            Our Services
                        </button>
                        <button className='btn-group' onClick={scrollToPage3}>
                            Pet Health Products
                        </button>
                        <button className='btn-group' onClick={scrollToPage4}>
                            ABOUT
                        </button>
                        <button className='btn-group'>
                            BOOK NOW
                        </button>
                        <button className='btn-login'>
                            <IoPerson className='icon-login' />
                            Login
                        </button>
                    </div>
                </nav>
                <div className='article'>
                    <div className='welcome-text'>
                        <h1 className='title-1'>
                            WELCOME to Rivera Veterinary Clinic
                        </h1>
                        <p className='text-1'>
                            Subheading with description of your shopping site
                        </p>
                    </div>
                    <IoIosArrowBack className='arrow-back-btn'/>
                    <IoIosArrowForward className='arrow-forward-btn'/>
                    <div className='btn-group-track-book'>
                        <button className='btn-book'>
                            Book an Appointment
                        </button>
                        <button className='btn-track'>
                            Track your Pet
                        </button>
                    </div>
                    <button className='btn-chat'>
                        <PiChatsDuotone className='icon-chat'/>
                        Chat with us
                    </button>
                </div>
            </div>
            <div className='page-2' ref={page2Ref}>
                <h1 className='title-text-2'>
                    Our Services
                </h1>
                <div className='services-container'>
                    
                </div>
            </div>
            <div className='page-3' ref={page3Ref}>
                <h1 className='title-text-3'>
                    Pet Health Products
                </h1>
            </div>
            <div className='page-4' ref={page4Ref}>
                <h1 className='title-text-4'>
                    ABOUT US
                </h1>
            </div>
        </div>
    )
}

export default ShopPage