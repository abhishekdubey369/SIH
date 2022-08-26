import { useState } from "react";
//import './App.css';
// import {Data} from './'


function SearchDistrict() {
  // console.log(Data.state);
  const states = ['UP', 'Delhi', 'Gujrat']
  const cities = {
    'UP': ['f', 'g', 'l'],
    'Delhi': ['a', 'b'],
    'Gujrat': ['tr', 'trt', 'rtt'],
  }

  const [selectedState, setSelectedState] = useState('')
  console.log(selectedState)
  return (
    <div>
      CASCADING DROPDOWNS :
      <select onChange={(e) => { setSelectedState(e.target.value) }}>
        {
          states.map(state => {
            return <option>{state}</option>
          })
        }
      </select>

      {selectedState && <select>
        {
          cities[selectedState].map(city => {
            return <option>{city}</option>
          })
        }
      </select>}

    </div>
  );
}

export default SearchDistrict;