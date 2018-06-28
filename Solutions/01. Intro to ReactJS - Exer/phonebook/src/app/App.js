import React from 'react'
import './app.css'
import db from '../contacts.json'
import contactService from '../controllers/contact'

const App = (
  <div className='container'>
    <div id='book'>
      <div id='list'>
        <h1>Contacts</h1>
        <div className='content'>
          {db.map(contactService.getContact)}
        </div>
      </div>
      <div id='details' />
    </div>
    <footer>Contact Book SPA &copy; 2017</footer>
  </div>
)

export default App
