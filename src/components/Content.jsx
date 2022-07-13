import React from 'react'

const Content = ({ data, query }) => {
 return (
  <div>
   {data.filter(el =>
    el.date.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || el.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || el.country.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || el.country.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || el.organization.toLocaleLowerCase().includes(query.toLocaleLowerCase())
   ).map(el => (
     <div key={el.id} className="bio-container">
      <div className="date">{new Date(el.date).getFullYear()}</div>
      <div className="data">
       <div className="data-left">
        <img src={el.image} alt="random-images" width="200px" height="200px" />
       </div>
       <div className="data-right">
        <p><b>Name:</b> {el.name}</p>
        <p><b>Country:</b> {el.country}</p>
        <p><b>Organization:</b> {el.organization}</p>
       </div>
      </div>
     </div>
   ))}
  </div>
 )
}

export default Content