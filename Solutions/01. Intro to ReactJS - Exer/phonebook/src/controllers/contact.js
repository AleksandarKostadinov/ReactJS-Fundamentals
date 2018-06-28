import React from 'react'
import ReactDOM from 'react-dom'
import db from '../contacts.json'

function getContact (data, index) {
  return (
    <div className='contact' data-id={index} onClick={() => getDetails(index)}>
      <span className='avatar small'>&#9787;</span>
      <span className='title'>{data.firstName} {data.lastName}</span>
    </div>
  )
}

function getDetails (index) {
  let contact = db[index]

  let details = <div className='content' >
    <h1>Details</h1>
    <div className='info'>
      <div className='col'>
        <span className='avatar'>&#9787;</span>
      </div>
      <div className='col'>
        <span className='name'>{contact.firstName}</span>
        <span className='name'>{contact.lastName}</span>
      </div>
    </div>
    <div className='info'>
      <span className='info-line'>&phone; {contact.phone}</span>
      <span className='info-line'>&#9993; {contact.email}</span>
    </div>
  </div >

  ReactDOM.render(details, document.getElementById('details'))
}

export default {
  getContact
}
