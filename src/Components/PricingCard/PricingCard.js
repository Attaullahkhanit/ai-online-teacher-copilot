import React from 'react';
import './PricingCard.css';

function PricingCard({pricingCardData}) {
    return (
        <>
        {pricingCardData.map((item) => (
            <div className='card shadow border-0 mb-4' style={{width: '90%', height: 'auto'}}>
                <div className='py-3'>
                    <h5 className='fw-bold'>{item?.title}</h5>
                    <h4 className='fw-bold'>{item?.price}</h4>
                </div>
                <div className='mypricecardlist px-3 pb-5 mb-2'>
                    <ul>
                        <li>
                            {item?.list1}
                        </li>
                        <li >
                            {item?.list2}
                        </li>
                        <li>
                            {item?.list3}
                        </li>
                        <li>
                            {item?.list4}
                        </li>
                        <li>
                            {item?.list5}
                        </li>
                    </ul>
                </div>
                <div className='text-center'>
                    <button className=' btn btn-primary fw-bold createaccountbtn px-4'>
                        {item?.btntext}
                    </button>
                </div>
            </div>
        ))}
        </>
    )
}

export default PricingCard