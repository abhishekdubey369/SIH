
// //import './App.css';
// // import {Data} from './'



// function SearchDistrict() {
//   const [State,setState] = useState();
//   // console.log(Data.state);
//   // const states = states.map((data)=>{return(data.state)});
//   // const states =["UP","Bihar","Andhra Pradesh","Arunachal Pradesh","Assam"]
//   // const cities = {
//   //   'UP': ['f', 'g', 'l'],
//   //   'Delhi': ['a', 'b'],
//   //   'Gujrat': ['tr', 'trt', 'rtt'],
//   // }

//   const [selectedState, setSelectedState] = useState('')
//   console.log(selectedState)
//   return (
//     <div>
//       {/* CASCADING DROPDOWNS : */}
//       {/* <select onChange={(e) => { setSelectedState(e.target.value) }}>
//         {
//           states.map(state => {
//             return <option>{state}</option>
//           })
//         }
//         />

//       {selectedState && <select>
//         {
//           cities[selectedState].map(city => {
//             return <option>{city}</option>
//           })
//         }
//       </select>} */}

// <Select
//    value={selectedOption}
//    onChange={this.handleChange}
//    options={
//       this.props.guests.map((guest, index) => {
//          return {
//             label: guest,
//             value: guest,
//             key: index
//          }
//       })
//    }
// />

//     </div>
//   );
// }

// export default SearchDistrict;


import React,{ useState } from "react";
import {states} from '../Data/states-and-districts'

function SDJS(){
  const styles = {
    backgroundColor: 'white',
    width: '50px',
    marginBottom: '10px',
    padding: '10px',
    color: 'green',
    boxShadow: 'rgb(0,0,0,0.44) 0px 5px 5px',
  };
  return(
    <div>
      <div>
      <select>
        
        {states.map(name => (
          <option hover={()=>(document.getElementById('id').innerHTML=(<select>
          {name.districts.map(data =>(
            <option>{data}</option>
          ))}
        </select>))}>
          {name.state}
          <select id="id"/>
        </option>
      ))}
        
      </select>
      {/* {states.districts.map(data =>(<li>
        {data.map}
      </li>))} */}
    </div>
    </div>
  )
}

export default SDJS;