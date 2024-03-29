import React from 'react';
import "./Reasons.css"
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import tick from "../assets/tick.png";


function Reasons(props) {
    return (
        <div className='Reasons' id='reasons'>
            <div className='left-r'>
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
            <div className='right-r'>
                <span>some reason</span>
                <div>
                    <span className='stroke-text'>why</span>
                    <span>choose Us?</span>
                </div>
                <div className='details-r'>
                    <div>
                        <img src={tick} alt="" />
                        <span>EXPERT Trainers</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>RELIABLE PARTNERS</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>Trustworthy partnerships for your fitness journey.</span>
                    </div>
                </div>
                {/* <span style={{ color: 'var(--gray)', fontWeight: 'normal' }}>OUR PARTNERS</span> */}
                {/* <div className="partner">
                    <img src={nb} alt="" />
                    <img src={adidas} alt="" />
                    <img src={nike} alt="" />
                </div> */}
            </div>
        </div>
    );
}

export default Reasons;