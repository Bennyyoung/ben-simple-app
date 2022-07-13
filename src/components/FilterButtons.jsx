import { useState } from "react"

function FilterButtons({ handleFilter, setQuery, data }) {
  // let country
  // let date
  // let incomingData
  // const [country, setCountry] = useState(data instanceof Array ? "" : "Isreal")

  // setCountry(
  //   'data[0]?.country'
  // )

  // function recieveData(){
  //  const incomingData = data;
  //  return incomingData[0]?.country;
  // }

 return (
  <div className="filter-container">
   <div className="filter-button1">
    <button onClick={handleFilter} type="button" className="btn btn-primary">ALL {" "}
    <svg width="20" height="17" viewBox="0 0 25 30" fill="none" className="ci-at ci_af">
       <path fillRule="evenodd" clipRule="evenodd" d="M-0.000442505 11C-0.000442505 13.0508 1.23345 14.8128 2.99956 15.5841L2.99956 28.9736C2.99956 29.5405 3.45908 30 4.02593 30H5.97318C6.54003 30 6.99956 29.5405 6.99956 28.9736L6.99956 15.5841C8.76567 14.8128 9.99956 13.0508 9.99956 11C9.99956 8.95139 8.76567 7.18836 6.99956 6.41629L6.99956 1.02637C6.99956 0.459523 6.54003 0 5.97319 0H4.02593C3.45908 0 2.99956 0.459523 2.99956 1.02637L2.99956 6.41629C1.23345 7.18836 -0.000442505 8.95139 -0.000442505 11ZM24.9996 19C24.9996 16.9492 23.7657 15.1872 21.9996 14.4159V1.02637C21.9996 0.459523 21.54 0 20.9732 0H19.0259C18.4591 0 17.9996 0.459523 17.9996 1.02637V14.4159C16.2334 15.1872 14.9996 16.9492 14.9996 19C14.9996 21.0486 16.2334 22.8116 17.9996 23.5837L17.9996 28.9736C17.9996 29.5405 18.4591 30 19.0259 30L20.9732 30C21.54 30 21.9996 29.5405 21.9996 28.9736V23.5837C23.7657 22.8116 24.9996 21.0486 24.9996 19Z" fill="#4A4E74"></path>
     </svg></button>
   </div>
   <div className="filter-button2">
    
    <button onClick={() => setQuery("2019")} type="button" className="btn btn-primary">2019</button>
   </div>
   <div className="filter-button3">
   <button onClick={() => setQuery('MALAWI')} type="button" className="btn btn-primary">MALAWI</button>
   </div>
   <div className="filter-button4">
    <button onClick={() => setQuery('ISRAEL')} type="button" className="btn btn-primary">ISRAEL</button>
   </div>
  </div>
 )
}

export default FilterButtons