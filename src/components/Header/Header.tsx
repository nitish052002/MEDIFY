import React from 'react'
import Button from '../Buttons/Button'
import BrandLogo from "../../assets/images/brandLogo.svg"

function Header() {
  return (
     <header>
        <div className="msg">
        The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.
        </div>
        <div className="naviigation-area">
            <div className="logo"><img src={BrandLogo} alt="" /></div>
            <nav>
                <ul>
                    <li>Find Doctors</li>
                    <li>Hospitals</li>
                    <li>Medicines</li>
                    <li>Surgeries</li>
                    <li>Software Provider</li>
                    <li>Facilities</li>
                    <li><Button label='My Booking'  width={2}/></li>
                </ul>
            </nav>
        </div>
     </header>
  )
}

export default Header