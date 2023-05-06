import React from 'react';
import './Pricing.css';
import PricingCard from '../../Components/PricingCard/PricingCard';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function Pricing() {
      const [alignment, setAlignment] = React.useState('Monthly');

      const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
      }


    const listpricingCard1Data =
      [
        {
          title: 'Free Trial',
          price: 'Free',
          list1: 'Immediate Access',
          list2: 'Advance Tools',
          list3: '10+ PDF Documents',
          btntext: 'LOGIN'
        }
      ]
    const listpricingCard2Data =
      [
        {
          title: 'For Teachers',
          price: '£6.99 / £60 Annual',
          list1: 'Full Access',
          list2: 'Email Support',
          list3: 'Premium Tools',
          list4: 'Access Latest Features',
          list5: 'Pro Storage',
          btntext: 'GO PRO'
        }
      ]
    const listpricingCard3Data =
      [
        {
          title: 'For Schools',
          price: 'Contact Us',
          list1: 'Wholeschool Training',
          list2: 'Full Access',
          list3: 'Text Editor',
          list4: 'Email Support',
          list5: 'Seamless Integration',
          btntext: 'CONTACT'
        }
      ]
    return (

      <>
        <Navbar />
        <section className='backimg pb-4 mb-3'>
        <div className='container text-center justify-content-center pb-5'>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className='py-3'>
                <div>
                  <h2 className='fw-bold pb-3 pt-2'>Choose Your Plan</h2>
                </div>
                <div>
                  <p className='pb-3 pt-2'>Vulputate augue sed dul, eget blbendum quis fames varius id. Pelientesque orcl molestle morbl.<br />
                    felis elementum, eu mauris ac arcue tincidunt.
                  </p>
                </div>

                <ToggleButtonGroup
                  className='togglebuttongroup mb-4'
                  style={{ borderRadius: '25px'}}
                  color="primary"
                  value={alignment}
                  exclusive
                  onChange={handleChange}
                  aria-label="Platform"
                >
                  <ToggleButton className='togglebutton' value="Monthly" style={{borderRadius: '25px'}}>Monthly</ToggleButton>
                  <ToggleButton className='togglebutton' value="Annualy" style={{borderRadius: '25px',}}>Annualy</ToggleButton>
                </ToggleButtonGroup>

                {/* <div className='pb-5'>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div> */}
              </div>
              <div className='row pb-5'>
                <div className='col-lg-4 col-md-12 col-md-12 '>
                  <PricingCard pricingCardData={listpricingCard1Data} />
                </div>
                <div className='col-lg-4 col-md-12 col-md-12'>
                  <PricingCard pricingCardData={listpricingCard2Data} />
                </div>
                <div className='col-lg-4 col-md-12 col-md-12'>
                  <PricingCard pricingCardData={listpricingCard3Data} />
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
        <Footer />
      </>
    )
  }

  export default Pricing