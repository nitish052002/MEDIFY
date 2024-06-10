import React from 'react'
import HospitalDetailCard from '../../components/Cards/HospitalDetailCard'

function Hospitals() {
  return (
    <div className="hospitals-list">
      <p className="txt-one"></p>
      <p className="txt-two"></p>

      <div className="result-container">
        <div className="list">
          <HospitalDetailCard/>
          <HospitalDetailCard/>
          <HospitalDetailCard/>
          <HospitalDetailCard/>
        </div>
        <div className="add">
  
        </div>
      </div>
    </div>
  )
}

export default Hospitals